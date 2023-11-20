import { CodegenConfig } from '@graphql-codegen/cli';

const url = process.env.GRAPHQL_API_URL;
const xApiKey = process.env.GRAPHQL_API_KEY;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          'x-api-key': xApiKey,
        },
      },
    },
  ],
  documents: ['app/**/*.tsx', 'app/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
