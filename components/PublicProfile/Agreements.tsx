import React, { useEffect, useState } from "react";
import { Flex, Text, Box, Container } from "theme-ui";
import { noContentContainer, noContent, title, agreementSection } from "./styles";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useLoadItemsProfile } from "../../utils/infiniteScrollProfile";
import AgreementItem from "../AgreementsList/AgreementItem";
import Lottie from "lottie-react";
import loader from "../../img/json/loader.json";
import Icon from "../icon/index";
import iconsObj from "../../assets/icons";

export default function Agreements() {
  const {
    filterValues,
    hasNextPage,
    valueSearch,
    filterOptions,
    setFilterOptions,
    loadMore,
    loading,
    data: agreements,
  } = useLoadItemsProfile();

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: loading,
  });

  return (
    <Flex sx={{ ...agreementSection, paddingTop: "104px", flexDirection: "column" }}>
      <Text sx={title}>Agreements</Text>
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
            {`User doesn't have any public and signed`}
            <br /> {`agreements yet`}
          </Text>
        </Container>
      ) : (
        <Container sx={noContentContainer}>
          <Flex sx={noContent}>
            <Box sx={{ width: "75px", height: "70px" }}>
              <Icon src={iconsObj.portfile} />
            </Box>
          </Flex>
          <Text sx={{ variant: "text.normalTextBold" }}>{`You don't have any agreements yet`}</Text>
        </Container>
      )}
    </Flex>
  );
}
