import * as React from "react";
import { useClient } from "urql";
import { myAgreementsQuery } from "../modules/graphql/queries";
import { useWeb3 } from "../hooks/useWeb3";
import { Agreement as AgreementResponse } from "../modules/graphql/gql/graphql";
import {
  initialPermission,
  initialSignature,
  initialStatus,
} from "../components/AgreementsList/initialState";
import { toAgreement } from "./typeUtils";
import { Agreement } from "../types";
import { notifError } from "./notification";
import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

interface Response {
  hasNextPage: boolean;
  dataArray: Array<Agreement>;
}

export function useLoadItems() {
  const client = useClient();

  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);
  const [valueSearch, setValueSearch] = React.useState("");
  const debouncedSearch = useDebounce(valueSearch, 500);
  const { account } = useWeb3();

  const [{ data, loading, error }, setData] = React.useState<{
    data: Agreement[];
    loading: boolean;
    error: string;
  }>({
    data: [],
    loading: false,
    error: "",
  });

  const [filterOptions, setFilterOptions] = React.useState({
    status: initialStatus,
    permission: initialPermission,
    signature: initialSignature,
  });

  const take = 10; // per load

  const skip = data?.length || 0;

  const initLoaded = React.useRef(false);

  const filterValues = [
    filterOptions.signature,
    ...filterOptions.permission,
    ...filterOptions.status,
  ]
    .filter(el => el.value)
    .map(el => {
      return el.nameSecondary;
    });

  const refetch = async (reset = false) => {
    setData(prev => ({ ...prev, loading: true }));
    return await client
      .query(
        myAgreementsQuery,
        {
          filterBy: !!filterValues.length ? filterValues : null,
          search: debouncedSearch.length ? debouncedSearch : null,
          take: take,
          skip: reset ? 0 : skip,
        },
        {
          requestPolicy: "network-only",
        }
      )
      .toPromise();
  };

  const loadMore = async () => {
    if (initLoaded.current) {
      return refetch().then(res => {
        const agreements = res.data?.myAgreements.agreements;
        if (agreements) {
          setData(prev => ({
            data: [...prev.data, ...agreements.map(a => toAgreement(a as AgreementResponse))],
            loading: false,
            error: "",
          }));
          const fetched = data.length + agreements.length;

          setHasNextPage(fetched < res.data!.myAgreements.count);
        }
      });
    }
  };

  useEffect(() => {
    initLoaded.current = false;
    if (account) {
      refetch(true).then(res => {
        const agreements = res.data?.myAgreements.agreements;
        if (!res.error && agreements) {
          setData({
            data: agreements.map(a => toAgreement(a as AgreementResponse)),
            loading: false,
            error: "",
          });
          setHasNextPage(agreements.length < res.data!.myAgreements.count);
          initLoaded.current = true;
        } else {
          notifError(res.error!.message);
          setData(prev => ({ ...prev, loading: false, error: res.error?.message || "" }));
        }
      });
    }
  }, [account, JSON.stringify(filterValues), debouncedSearch]);

  return {
    setFilterOptions,
    filterOptions,
    setValueSearch,
    filterValues,
    hasNextPage,
    valueSearch,
    loadMore,
    loading,
    error,
    data,
  };
}
