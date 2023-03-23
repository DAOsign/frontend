/* eslint-disable no-console */
// /** @jsxImportSource theme-ui */
import React, { useEffect, useMemo, useState } from "react";
import UserCard from "./UserCard";
import { Flex, Button, Text, Container, Link, Box, Spinner } from "theme-ui";
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
        <HeaderAgreement
          value={valueSearch}
          onChangeSearch={setValueSearch}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        {!!agreements.length ? (
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
        ) : loading ? (
          <Box
            sx={{
              minHeight: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Lottie style={{ height: "80px" }} animationData={loader} loop={true} />
          </Box>
        ) : filterValues.length || valueSearch.length ? (
          <Container sx={{ ...noContentContainer }}>
            <Flex sx={noContent}>
              <Box sx={{ width: "75px", height: "70px" }}>
                <Icon src={iconsObj.portfile} />
              </Box>
            </Flex>
            <Text sx={{ variant: "text.normalTextBold" }}>
              {`Sorry, no results found.`}
              <br /> {`Please adjust your search/filter criteria and try again.`}
            </Text>
          </Container>
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
      </Container>
    </Flex>
  );
}
