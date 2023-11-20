import Continents from '@/app/(root)/graphql/Continents';
import ThreeRingLoader from '@/components/Animation/ThreeRingLoader';
import { graphql } from '@/gql';
import { graphqlClient } from '@/libs/graphql-client';

const getAllPosts = graphql(`
  query getAllContinents {
    continents {
      countries {
        capital
      }
      name
    }
  }
`);

const getContinentDocument = graphql(`
  query getContinent($code: ID!) {
    continent(code: $code) {
      countries {
        capital
        emoji
      }
      name
    }
  }
`);

const GraphqlPage = async () => {
  const { continents } = await graphqlClient.request(getAllPosts, {});
  const { continent } = await graphqlClient.request(getContinentDocument, {
    code: 'AS',
  });
  console.log('❄️ ~ file: page.tsx:31 ~ continent:', continent);
  return (
    <div className="w-full h-full flex items-start justify-center ">
      {continents && continents.length ? (
        <>
          {' '}
          <Continents
            continents={continents}
            continent={continent}
          />
        </>
      ) : (
        <ThreeRingLoader />
      )}
    </div>
  );
};
export default GraphqlPage;
