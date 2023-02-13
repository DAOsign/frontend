import * as React from "react";
import { useQuery } from "urql";
import { myAgreementsQuery } from "../modules/graphql/queries";
import { useWeb3 } from "../hooks/useWeb3";
import { Agreement } from "../modules/graphql/gql/graphql";
import {
  initialPermission,
  initialSignature,
  initialStatus,
} from "../components/AgreementsList/initialState";
const RESPONSE_TIME_IN_MS = 1000;

interface Response {
  hasNextPage: boolean;
  dataArray: Array<Agreement>;
}

export function useLoadItems() {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState<Array<Agreement>>([]);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(true);
  const [errorLoad, setErrorLoad] = React.useState<Error>();
  const [valueSearch, setValueSearch] = React.useState("");
  const [count, setCount] = React.useState(10);
  const [skip, setSkip] = React.useState(-10);

  async function loadMore() {
    setLoading(true);
    try {
      const { dataArray, hasNextPage: newHasNextPage } = await loadItems(items.length);
      setItems(current => [...current, ...dataArray]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setErrorLoad(err);
    } finally {
      setLoading(false);
    }
  }

  function loadItems(startCursor = 0): Promise<Response> {
    return new Promise(resolve => {
      let newArray: Array<Agreement> = [];
      //@ts-ignore
      if (skip >= data?.myAgreements?.count) {
        setHasNextPage(false);
        setLoading(false);
        return;
      } else {
        setSkip(skip + 10);
      }
      setTimeout(() => {
        for (let i = startCursor; i < startCursor + count; i++) {
          const updateArray = !!data?.myAgreements?.agreements
            ? [...data?.myAgreements?.agreements]
            : [];
          //@ts-ignore
          newArray = [...updateArray];
        }

        resolve({ hasNextPage: true, dataArray: newArray });
      }, RESPONSE_TIME_IN_MS);
    });
  }

  const [filterOptions, setFilterOptions] = React.useState({
    status: initialStatus,
    permission: initialPermission,
    signature: initialSignature,
  });

  const filterValues = [
    filterOptions.signature,
    ...filterOptions.permission,
    ...filterOptions.status,
  ]
    .filter(el => el.value)
    .map(el => {
      return el.nameSecondary;
    });
  const validData = !!filterValues.length || !!valueSearch.length;

  const { account } = useWeb3();

  React.useEffect(() => {
    setHasNextPage(true);
    setSkip(0);
    setItems([]);
  }, [filterOptions]);

  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    query: myAgreementsQuery,
    //@ts-ignore: force refetch agreements when account changes
    variables: {
      account,
      filterBy: !!filterValues.length ? filterValues : null,
      search: !!valueSearch.length ? valueSearch : null,
      take: count,
      skip,
    },
    pause: !account,
    requestPolicy: "network-only",
  });

  return {
    agreementsLoading,
    setFilterOptions,
    filterOptions,
    setValueSearch,
    filterValues,
    hasNextPage,
    valueSearch,
    validData,
    loadMore,
    loading,
    error,
    items,
    count,
    data: !!filterValues.length || !!valueSearch.length ? data : items,
  };
}
