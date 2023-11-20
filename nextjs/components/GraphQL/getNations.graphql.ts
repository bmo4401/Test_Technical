'use client';
import {
  Query,
  QueryContinentArgs,
  QueryContinentsArgs,
} from '@/types/graphql';
import { parse } from 'graphql';
import { request, gql } from 'graphql-request';

const document = gql`
  query getContinent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
      }
    }
  }
`;
const variables = {
  code: `AS`,
};
const getNations = async () => {
  const data = await request<Query>(
    process.env.NEXT_PUBLIC_API_URL,
    document,
    variables,
  );

  return data;
};

export { getNations };
