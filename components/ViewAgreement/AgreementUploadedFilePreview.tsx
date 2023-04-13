import React, { useEffect, useState } from "react";
import {
  AgreementDocument,
  DEFAULT_FILE_PATH,
  FILE_VIEWER_CONFIG,
  getIconByFileType,
} from "../CreateAgreement/Steps/StepTwo/Upload/Parts/PreviewScreen";
import dynamic from "next/dynamic";
import { notifError } from "../../utils/notification";
import { AgreementLocation, LOCATION_CLOUD, LOCATION_PUBLIC_IPFS } from "../../types";
import { restoreCloudFile, restoreIpfsFile } from "../../modules/rest";
import { Box, Flex, Link, Spinner, Text } from "theme-ui";
import Icon from "../icon";
import {
  uploadedFileIconContainer,
  uploadedFilePreview,
  uploadedFilePreviewContainer,
  uploadedFilePreviewLink,
  uploadedFileTitle,
  uploadedFileTitleContainer,
  uploadedFileTitleLink,
  uploadedFileTitleWrapper,
  viewFileLabel,
} from "./styles";

const FileViewer = dynamic(() => import("@cyntler/react-doc-viewer"), {
  ssr: false,
});

function formatFileType(fileType: string): string {
  switch (fileType) {
    case "application/pdf":
      return "PDF";
    case "text/plain":
      return "TXT";
    default:
      return "File";
  }
}

async function restoreAgreementFile(
  fileHashOrPath: string,
  agreementLocation: AgreementLocation,
  abortController?: AbortController
): Promise<File | null> {
  if (!fileHashOrPath) throw new Error("File hash or path was not specified");
  if (!agreementLocation) throw new Error("Agreement location was not specified");

  switch (agreementLocation) {
    case LOCATION_CLOUD:
      return restoreCloudFile(fileHashOrPath, abortController);
    case LOCATION_PUBLIC_IPFS:
      return restoreIpfsFile(fileHashOrPath, abortController);
    default:
      throw new Error(
        `Loading file from agreement location ${agreementLocation} is not yet implemented`
      );
  }
}

interface Props {
  agreementLocation: AgreementLocation | undefined;
  filePath?: string;
  fileIpfsHash?: string;
}

const getIpfsUri = (fileIpfsHash: string) =>
  `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${fileIpfsHash}`;

export const AgreementUploadedFilePreview = ({
  agreementLocation,
  fileIpfsHash,
  filePath,
}: Props) => {
  const [agreementFile, setAgreementFile] = useState<File | null>(null);
  const [agreementPreviewDocuments, setAgreementPreviewDocuments] = useState<
    AgreementDocument[] | null
  >(null);
  const [waitedPreviewerLoadingTime, setWaitedPreviewerLoadingTime] = useState<boolean>(false);

  useEffect(() => {
    if (agreementLocation && (filePath || fileIpfsHash)) {
      const abortController = new AbortController();

      restoreAgreementFile(filePath! || fileIpfsHash!, agreementLocation, abortController)
        .then(file => {
          setAgreementFile(file);
          if (!file) {
            notifError("Couldn't load agreement file");
            setAgreementFile(null);
            return;
          }
          setAgreementFile(file);
        })
        .catch(error => {
          if (error?.message?.includes("canceled")) return;

          notifError(
            `Failed to load agreement document${error?.message ? `: ${error.message}` : ""}`
          );
          // eslint-disable-next-line no-console
          console.error("[RestoreAgreementFile]", error);
        });

      return () => abortController.abort();
    } else {
      setAgreementPreviewDocuments(null);
    }
  }, [fileIpfsHash, filePath, agreementLocation]);

  useEffect(() => {
    if (agreementFile) {
      let filePath;
      if (typeof window !== "undefined") {
        if (agreementLocation === LOCATION_PUBLIC_IPFS && fileIpfsHash) {
          filePath = getIpfsUri(fileIpfsHash);
        } else {
          filePath = window.URL.createObjectURL(agreementFile);
        }
      } else {
        filePath = DEFAULT_FILE_PATH;
      }

      setAgreementPreviewDocuments([
        { uri: filePath, fileName: agreementFile?.name || "Agreement file" },
      ]);
    } else {
      setAgreementPreviewDocuments(null);
    }
  }, [agreementFile]);

  useEffect(() => {
    if (agreementPreviewDocuments) {
      const id = setTimeout(() => {
        setWaitedPreviewerLoadingTime(true);
      }, 500);
      return () => clearTimeout(id);
    }
  }, [agreementPreviewDocuments]);

  return (
    <Box
      sx={{ minHeight: "383px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {agreementPreviewDocuments ? (
        <Flex
          sx={{
            ...uploadedFilePreviewContainer,
            display: waitedPreviewerLoadingTime ? "flex" : "none",
          }}
        >
          <Flex sx={uploadedFileTitleContainer}>
            <Link
              href={agreementPreviewDocuments[0].uri}
              target="_blank"
              sx={uploadedFileTitleLink}
            >
              <Box sx={uploadedFileIconContainer}>
                <Icon src={getIconByFileType(agreementFile?.type)} />
              </Box>
              <Box sx={uploadedFileTitleWrapper}>
                <Text sx={uploadedFileTitle}>{agreementPreviewDocuments[0]?.fileName}</Text>
              </Box>
            </Link>
          </Flex>
          <Box sx={uploadedFilePreview}>
            <Link
              href={agreementPreviewDocuments[0].uri}
              target="_blank"
              sx={uploadedFilePreviewLink}
            >
              <FileViewer documents={agreementPreviewDocuments} config={FILE_VIEWER_CONFIG} />
            </Link>
          </Box>
          <Box sx={viewFileLabel}>
            <Link href={agreementPreviewDocuments[0].uri} target="_blank">
              View {formatFileType(agreementFile?.type || "File")}
            </Link>
          </Box>
        </Flex>
      ) : null}
      {!agreementPreviewDocuments || !waitedPreviewerLoadingTime ? (
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Spinner size={40} color="#CA5CF2" />
          {agreementLocation === LOCATION_PUBLIC_IPFS && fileIpfsHash ? (
            <Box>
              Loading file from IPFS.
              <br /> It may take a while.
            </Box>
          ) : null}
        </Flex>
      ) : null}
    </Box>
  );
};
