/* eslint-disable no-console */
/** @jsxImportSource theme-ui */
import React, { useEffect, useMemo, useState } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container, Link, Box } from "theme-ui";
import { title, containerSides, noContent, btnText, btn, iconPlus } from "./styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import HeaderAgreement from "./HeaderAgreement";
import NextLink from "next/link";
import { useQuery } from "urql";
import { myAgreementsQuery } from "../../modules/graphql/queries";
import { useWeb3 } from "../../hooks/useWeb3";
import AgreementItem from "./AgreementItem";
import { toAgreement } from "../../utils/typeUtils";
import { Agreement as AgreementRespone } from "../../modules/graphql/gql/graphql";
import Lottie from "lottie-react";
import loader from "../../img/json/loader.json";
import { initialPermission, initialSignature, initialStatus } from "./initialState";

export default function AgreementsList({ address }: any) {
  const [valueSearch, setValueSearch] = useState("");
  const [filterOptions, setFilterOptions] = useState({
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

  const { account } = useWeb3();
  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    query: myAgreementsQuery,
    //@ts-ignore: force refetch agreements when account changes
    variables: {
      account,
      filterBy: !!filterValues.length ? filterValues : null,
      search: !!valueSearch.length ? valueSearch : null,
    },
    pause: !account,
    requestPolicy: "network-only",
  });

  useEffect(() => {
    error && console.error(error);
  }, [error]);

  const agreements = useMemo(
    () => data?.myAgreements?.agreements.map((a: any) => toAgreement(a as AgreementRespone)) || [],
    [data]
  );

  return (
    <Flex sx={containerSides}>
      <UserCard address={address} />
      <Container
        sx={{
          "@media screen and (min-width: 1201px)": {
            paddingLeft: "300px",
          },
        }}
      >
        <Flex>
          <Text sx={title}>My Agreements</Text>
          <NextLink href={"/create?step=1"}>
            <Button sx={btn} type="button">
              <Box sx={iconPlus}>
                <Icon src={iconsObj.plus} />
              </Box>
              <Link sx={btnText}>New Agreement</Link>
            </Button>
          </NextLink>
        </Flex>
        {!!agreements.length || !(!filterValues.length && !valueSearch.length) ? (
          <HeaderAgreement
            value={valueSearch}
            onChangeSearch={setValueSearch}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        ) : null}
        {agreementsLoading ? (
          <Lottie
            style={{ height: "60px", marginBottom: "52px" }}
            animationData={loader}
            loop={true}
          />
        ) : agreements.length ? (
          agreements.map((agr: any, index: number) => <AgreementItem key={index} {...agr} />)
        ) : (
          <Container sx={{ textAlign: "center" }}>
            <Flex sx={noContent}>
              <Box sx={{ width: "75px", height: "70px" }}>
                <Icon src={iconsObj.portfile} />
              </Box>
            </Flex>
            <Text
              sx={{ variant: "text.normalTextBold" }}
            >{`You don't have any agreements yet`}</Text>
          </Container>
        )}
      </Container>
    </Flex>
  );
}
