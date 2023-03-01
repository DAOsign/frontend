import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";

const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET_KEY);

const fs = require("fs");

const MAX_FILE_MEGABYTES_SIZE = 20;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const form = new formidable.IncomingForm({
      maxFileSize: MAX_FILE_MEGABYTES_SIZE * 1024 * 1024,
    });
    return form.parse(req, async (err: Error, fields: any, files: any) => {
      if (err) {
        if (err.message.includes("maxFieldsSize")) {
          return res.status(500).json({
            status: "failed",
            error: `File can not be more than ${MAX_FILE_MEGABYTES_SIZE} mb`,
          });
        }
        return res.status(500).json({
          status: "failed",
          error: err.message,
        });
      }
      const file = files.data;

      if (!file) {
        return res.status(500).json({
          status: "failed",
          error: "No file",
        });
      }

      const readableStreamForFile = fs.createReadStream(file.filepath);

      const pinataRes = await pinata.pinFileToIPFS(readableStreamForFile, {
        pinataMetadata: {
          name: file.originalFilename,
        },
        pinataOptions: {
          cidVersion: 0,
        },
      });

      return res.status(200).json(pinataRes);
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      error,
    });
  }
}
