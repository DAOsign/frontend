/* eslint-disable no-console */
// /** @jsxImportSource theme-ui */
import React, { useEffect, useMemo, useState } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container, Link, Box } from "theme-ui";
import {
  title,
  containerSides,
  noContentContainer,
  noContent,
  btnText,
  btn,
  iconPlus,
  newAgreementTitle,
} from "./styles";
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
    setValueSearch,
    setFilterOptions,
    filterOptions,
    filterValues,
    hasNextPage,
    valueSearch,
    loadMore,
    loading,
    error,
    data: agreements,
  } = useLoadItems();

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: loading,
  });

  useEffect(() => {
    error && console.error(error);
  }, [error]);

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
        <Flex sx={newAgreementTitle}>
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
        {/* {!!agreements.length || !(!filterValues.length && !valueSearch.length) ? (
          <HeaderAgreement
            value={valueSearch}
            onChangeSearch={setValueSearch}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        ) : null} */}
        {/* {agreementsLoading ? (
          <Lottie
            style={{ height: "60px", marginBottom: "52px" }}
            animationData={loader}
            loop={true}
          />
        ) : agreements.length ? ( */}

        {!!agreements.length || !(!filterValues.length && !valueSearch.length) ? (
          <>
            <HeaderAgreement
              value={valueSearch}
              onChangeSearch={setValueSearch}
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
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
        ) : (
          <Container sx={noContentContainer}>
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
        {!agreements.length ? (
          <Container sx={{ ...noContentContainer }}>
            <Flex sx={noContent}>
              <Box sx={{ width: "75px", height: "70px" }}>
                <Icon src={iconsObj.portfile} />
              </Box>
            </Flex>
            <Text
              sx={{ variant: "text.normalTextBold" }}
            >{`No agreements matching selected filters`}</Text>
          </Container>
        ) : null}
      </Container>
    </Flex>
  );
}
