import React, { useEffect, useState } from "react";
import { contentData, DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT, showMoreLabel } from "./styles";
import { Box, Flex, Spinner } from "theme-ui";
import rehypeSanitize from "rehype-sanitize";
import { keyframes, Keyframes } from "@emotion/react";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const showMoreFadeInAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const showMoreFadeOutAnimation = keyframes`
  from {
    opacity: 1
  }
  
  20% {
    opacity: 0
  }
  
  70% {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

interface Props {
  textContent: string;
}

export const AgreementTextMarkdownPreview = ({ textContent }: Props) => {
  const [isShowMoreLabelVisible, setIsShowMoreLabelVisible] = useState<boolean | undefined>(
    undefined
  );
  const [hasContentDataLoadedByTextPreviewer, setHasContentDataLoadedByTextPreviewer] =
    useState<boolean>(false);

  const [contentPreviewHeight, setContentPreviewHeight] = useState<number>(
    DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT
  );

  const [textExpandAnimation, setTextExpandAnimation] = useState<Keyframes | {}>({});

  const [shouldShowLabelFadeInAnimation, setShouldShowLabelFadeInAnimation] = useState<
    boolean | undefined
  >(undefined);
  const [shouldExpandTextContent, setShouldExpandTextContent] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const contentPreview = document.getElementsByClassName("w-md-editor-content");
    if (!contentPreview?.length) return;

    if (
      contentPreview[0]?.scrollHeight &&
      contentPreview[0]?.scrollHeight > DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT
    ) {
      setIsShowMoreLabelVisible(true);
    } else {
      setIsShowMoreLabelVisible(false);
    }
  }, [hasContentDataLoadedByTextPreviewer]);

  useEffect(() => {
    const id = setTimeout(() => {
      setHasContentDataLoadedByTextPreviewer(true);
    }, 500);
    return () => clearTimeout(id);
  }, [textContent]);

  const handleShowMore = () => {
    setShouldExpandTextContent(prevState => !prevState);

    const contentPreview = document.getElementsByClassName("w-md-editor-content");
    if (!contentPreview?.length) return;

    let newContentPreviewHeight;
    if (shouldExpandTextContent) {
      newContentPreviewHeight = DEFAULT_CONTENT_PREVIEW_MAX_HEIGHT;
    } else {
      newContentPreviewHeight = contentPreview[0]?.scrollHeight;
      if (!newContentPreviewHeight) return;
      newContentPreviewHeight += 80;
    }

    const contentDataElement = document.getElementById("contentData");
    if (contentDataElement) {
      contentDataElement.style.height = newContentPreviewHeight?.toString();
      const newShowMoreAnimation = keyframes({
        from: { maxHeight: `${contentPreviewHeight}px` },
        to: { maxHeight: `${newContentPreviewHeight}px` },
      });
      setTextExpandAnimation(newShowMoreAnimation);
      setContentPreviewHeight(newContentPreviewHeight);
      setShouldShowLabelFadeInAnimation(true);
    }
  };

  const onContentPreviewDataLoaded = () => {
    setHasContentDataLoadedByTextPreviewer(true);
  };

  return (
    <Box
      sx={{
        ...contentData,
        animation:
          shouldExpandTextContent === undefined ? "" : `${textExpandAnimation} 1s forwards`,
      }}
      id="contentData"
    >
      {!hasContentDataLoadedByTextPreviewer ? (
        <Flex style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Spinner size={40} color="#CA5CF2" />
        </Flex>
      ) : null}
      <MDEditor
        value={textContent}
        preview={"preview"}
        hideToolbar={true}
        style={{ display: hasContentDataLoadedByTextPreviewer ? "initial" : "none" }}
        height="fit-content"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        onLoad={onContentPreviewDataLoaded}
      />
      {isShowMoreLabelVisible ? (
        <Box
          sx={{
            ...showMoreLabel,
            animation:
              shouldExpandTextContent === undefined
                ? `${showMoreFadeInAnimation} 1s forwards`
                : shouldShowLabelFadeInAnimation
                ? `${showMoreFadeOutAnimation} 1.7s forwards`
                : "",
          }}
          onClick={handleShowMore}
          onAnimationEnd={() => {
            setShouldShowLabelFadeInAnimation(false);
          }}
        >
          {shouldExpandTextContent ? "Show Less" : "Show More"}
        </Box>
      ) : null}
    </Box>
  );
};
