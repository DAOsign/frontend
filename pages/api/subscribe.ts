import type { NextApiRequest, NextApiResponse } from "next";
import client from "@mailchimp/mailchimp_marketing";
const md5 = require("md5");

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const listId = process.env.MAILCHIMP_AUDIENCE_ID as string;

client.setConfig({ apiKey: apiKey, server: server });

export async function addUserTag(email: string) {
  const subscriberHash = md5(email.toLowerCase());
  const member = (await client.lists.getListMember(listId, subscriberHash).catch(e => {
    return null;
  })) as client.lists.MembersSuccessResponse;

  if (!member) {
    return client.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      tags: ["Subscribe"],
    });
  } else {
    return client.lists.updateListMemberTags(listId, subscriberHash, {
      tags: [{ name: "Subscribe", status: "active" }],
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return addUserTag(req.body.email)
    .then(() => {
      res.status(200).json("Success");
    })
    .catch(e => {
      res.status(e?.status).json(e);
    });
}
