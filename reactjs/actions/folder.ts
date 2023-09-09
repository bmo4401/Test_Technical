import { Query } from '@/type/graphql';
import { request, gql } from 'graphql-request';

const document = gql`
   {
      folder {
         id
         name
      }
   }
`;

const getFolder = async () => {
   const { folder } = await request<Query>(
      process.env.NEXT_PUBLIC_API_URL,
      document,
   );

   return folder;
};

export { getFolder };
