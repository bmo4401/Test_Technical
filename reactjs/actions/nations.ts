import { Query, QueryContinentsArgs } from '@/type/graphql';
import { request, gql } from 'graphql-request';

const document = gql`
  {
    continent(code: "AS") {
      name
      countries {
        name
      }
    }
  }
`;

const getNations = async () => {
  const { continent } = await request<Query>(
    process.env.NEXT_PUBLIC_API_URL,
    document,
  );
  console.log('❄️ ~ file: nations.ts:20 ~ data:', continent);

  return continent;
};

export { getNations };
