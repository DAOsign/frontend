import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.tsx', '**/queries/*.ts', '**/mutations/*.ts' ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './modules/graphql/gql/': {
      preset: 'client',
      plugins: []
    }
  }
}
 
export default config