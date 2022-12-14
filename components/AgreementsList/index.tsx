/* eslint-disable no-console */
/** @jsxImportSource theme-ui */
import React, { useEffect, useMemo } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container, Link, Spinner, Box } from "theme-ui";
import { title, containerSides, noContent, btnText, btn, iconPlus } from "./styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import HeaderAgreement from "./HeaderAgreement";
import ItemMyAgreement from "./AgreementItem";
import NextLink from "next/link";
import { useQuery } from "urql";
import { agreementsMutation } from "../../modules/graphql/queries";
import { useWeb3 } from "../../hooks/useWeb3";
import AgreementItem from "./AgreementItem";
import { toAgreement } from "../../utils/typeUtils";
import { Agreement as AgreementRespone } from "../../modules/graphql/gql/graphql";
import LogOutPopap from "../modalLogaut";

export default function AgreementsList({ address }: any) {
  const { account } = useWeb3();
  const [{ data, fetching: agreementsLoading, error }] = useQuery({
    query: agreementsMutation,
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
        {agreements.length ? <HeaderAgreement /> : null}
        {agreementsLoading ? (
          <Spinner />
        ) : agreements.length ? (
          agreements.map(agr => <AgreementItem key={agr.title} {...agr} />)
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
