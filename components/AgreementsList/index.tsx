/* eslint-disable no-console */
// /** @jsxImportSource theme-ui */
import React, { useEffect, useMemo, useState } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container, Link, Box } from "theme-ui";
import { title, containerSides, noContent, btnText, btn, iconPlus } from "./styles";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";
import HeaderAgreement from "./HeaderAgreement";
import NextLink from "next/link";

import AgreementItem from "./AgreementItem";
import { toAgreement } from "../../utils/typeUtils";
import { Agreement as AgreementRespone } from "../../modules/graphql/gql/graphql";
import Lottie from "lottie-react";
import loader from "../../img/json/loader.json";

import { useLoadItems } from "../../utils/infiniteScroll";
import useInfiniteScroll from "react-infinite-scroll-hook";

export default function AgreementsList({ address }: any) {
  const {
    error: errorLoad,
    setValueSearch,
    setFilterOptions,
    filterOptions,
    filterValues,
    hasNextPage,
    valueSearch,
    loadMore,
    validData,
    loading,
    error,
    count,
    data,
  } = useLoadItems();
  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!errorLoad,
  });

  useEffect(() => {
    error && console.error(error);
  }, [error]);

  const agreements = useMemo(() => {
    return !validData
      ? //@ts-ignore
        data?.map((a: any) => toAgreement(a as AgreementRespone)) || []
      : //@ts-ignore
        data?.myAgreements?.agreements.map((a: any) => toAgreement(a as AgreementRespone)) || [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  console.log("data", data);

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
        {/* {agreementsLoading ? (
          <Lottie
            style={{ height: "60px", marginBottom: "52px" }}
            animationData={loader}
            loop={true}
          />
        ) : agreements.length ? ( */}
        <>
          <div>
            {agreements.map((agr: any, index: number) => (
              <AgreementItem key={index} {...agr} />
            ))}
            {(loading || hasNextPage) && (
              <div ref={infiniteRef}>
                <Lottie
                  style={{ height: "60px", marginBottom: "52px" }}
                  animationData={loader}
                  loop={true}
                />
              </div>
            )}
          </div>
        </>
        {/* ) : (
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
        )} */}
      </Container>
    </Flex>
  );
}
