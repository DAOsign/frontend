import React from "react";
import { Button, Container, Flex, Text, Box } from "theme-ui";
import { useRouter } from "next/router";
import iconsObj from "../../assets/icons";
import Icon from "../icon";
import {
  leftSideContainer,
  buttonContainer,
  leftContainer,
  pageContainer,
  secondText,
  pageText,
  pageName,
  notFoundRightSideContainer,
  accessDeniedRightSideContainer,
} from "./styles";

interface PageNotFoundProps {
  pageType: "notFound" | "accessDenied";
}

export default function PageNotFound({ pageType }: PageNotFoundProps) {
  const { push } = useRouter();

  const pageTypeMap = {
    notFound: {
      name: "404",
      title: "Page Not Found",
      subTitle: "Sorry, we couldn't find the page you are looking for",
      icon: iconsObj.LostConnection,
    },
    accessDenied: {
      title: "Access Denied",
      subTitle: "Sorry, you don't have permissions to view the document",
      icon: iconsObj.accessDenied,
    },
  };

  return (
    <Flex sx={pageContainer}>
      <Container sx={leftSideContainer}>
        <Flex sx={leftContainer}>
          {pageType === "notFound" && (
            <Flex>
              <Text sx={pageName}>{pageTypeMap[pageType].name}</Text>
            </Flex>
          )}
          <Flex sx={{ pb: "12px" }}>
            <Text sx={pageText}>{pageTypeMap[pageType].title}</Text>
          </Flex>
          <Flex>
            <Text sx={secondText}>{pageTypeMap[pageType].subTitle}</Text>
          </Flex>
          <Button onClick={() => push("/")} sx={buttonContainer} type="button">
            Go Home
          </Button>
        </Flex>
      </Container>
      <Flex sx={{ ml: "auto", mr: "auto" }}>
        <Box
          sx={pageType === "notFound" ? notFoundRightSideContainer : accessDeniedRightSideContainer}
        >
          <Icon src={pageTypeMap[pageType].icon} />
        </Box>
      </Flex>
    </Flex>
  );
}
