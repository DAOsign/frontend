import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestedHash = req.query.hash;

  return axios
    .get(`https://${process.env.PINATA_GATEWAY}/ipfs/${requestedHash}`, {
      headers: {
        "x-pinata-gateway-token": process.env.PINATA_ACCESS_TOKEN,
      },
      responseType: "blob",
    })
    .then(result => {
      const fileName = requestedHash;
      res.setHeader("Content-Type", result.headers["content-type"]!);
      res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
      res.send(Buffer.from(result.data));
      return res.status(201);
    })
    .catch(e => {
      return res.status(400);
    });
}
