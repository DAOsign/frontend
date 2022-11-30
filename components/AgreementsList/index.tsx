/** @jsxImportSource theme-ui */
import React, { useEffect, useMemo } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container, Link, Spinner } from "theme-ui";
import { title, containerSides, noContent, btnText, btn } from "./styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import HeaderAgreement from "./HeaderAgreement";
import ItemMyAgreement from "./AgreementItem";
import NextLink from "next/link";
import { useQuery } from "urql";
import { agreements as agreementsQuery } from "../../modules/graphql/queries";
import { useWeb3 } from "../../hooks/useWeb3";
import AgreementItem from "./AgreementItem";
import { toAgreement } from "../../utils/typeUtils";
import { Agreement as AgreementRespone } from "../../modules/graphql/gql/graphql";

export default function AgreementsList({ address }: any) {
  const { account } = useWeb3();
  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    query: agreementsQuery,
    variables: { authorWallet: account },
  });

  useEffect(() => {
    error && console.error(error);
  }, [error]);

  const agreements = useMemo(
    () => data?.agreements?.agreements.map(a => toAgreement(a as AgreementRespone)) || [],
    [data]
  );

  return (
    <Flex sx={containerSides}>
      <UserCard address={address} />
      <Container>
        <Flex>
          <Text sx={title}>My Agreement</Text>
          <Button sx={btn} type="button">
            <Icon src={iconsObj.plus} />
            <NextLink href={"/create"}>
              <Link sx={btnText}>New Agreement</Link>
            </NextLink>
          </Button>
        </Flex>
        <HeaderAgreement />
        {agreementsLoading ? (
          <Spinner />
        ) : agreements.length ? (
          agreements.map(agr => <AgreementItem key={agr.title} {...agr} />)
        ) : (
          <Container sx={{ textAlign: "center" }}>
            <Flex sx={noContent}>
              <Icon src={iconsObj.portfile} />
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
