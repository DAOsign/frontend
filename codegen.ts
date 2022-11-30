import { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ["src/**/*.tsx", "**/queries/*.ts", "**/mutations/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./modules/graphql/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
