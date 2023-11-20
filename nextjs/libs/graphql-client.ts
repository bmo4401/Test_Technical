import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(process.env.GRAPHQL_API_URL, {
  headers: {
    'x-api-key': process.env.GRAPHQL_API_KEY,
  },
});
