import React, { useState } from "react";
import { Text, Box } from "theme-ui";
import { imageUploadContainer, uploadText, uploadTextMobile } from "../../styles";

const Hash = require("ipfs-only-hash");

export default function Upload() {
  const [bytes, setBytes] = useState<Uint8Array>();
  const [name, setName] = useState("");

  async function readFile(target: any) {
    let file = target.files[0] as File;
    if (target.files[0]) {
      setName(target.files[0].name);
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      setBytes(bytes);
    }
  }

  const ipfs = async () => {
    const hash = await Hash.of(bytes);
  };
  return (
    <form id="upload-container" method="POST" action="send.php">
      <Box sx={imageUploadContainer}>
        <input
          lang="en"
          onChange={({ target }) => readFile(target)}
          className="file"
          id="file"
          type="file"
          name="file"
        />
        {name ? (
          <Text sx={{ variant: "text.smallTextMedium", opacity: 1, display: "block" }}>
            {name}
            {bytes && (
              <button
                style={{ marginTop: "50px", zIndex: 10, marginLeft: "5px" }}
                type="button"
                onClick={ipfs}
              >
                hash ipfs
              </button>
            )}
          </Text>
        ) : (
          <>
            <Text sx={uploadText}>
              Upload Agreement file using Drag & Drop <br /> or
              <span style={{ color: "#CA5CF2" }}> Choose File</span>
            </Text>
            <Text sx={uploadTextMobile}>Choose File</Text>
          </>
        )}
      </Box>
    </form>
  );
}
