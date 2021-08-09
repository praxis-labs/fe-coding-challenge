import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;

const httpLink = createHttpLink({
  credentials: 'include',
  uri: GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      // eslint-disable-next-line
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });

  if (networkError) {
    // eslint-disable-next-line
    console.log(`[Network error]: ${networkError}`);
  }
});

const additiveLink = from([errorLink, authLink, httpLink]);

const client = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
});

export const cleanTypeName = (obj: any) => {
  const newObj = { ...obj };
  const keys = Object.keys(newObj);
  delete newObj.id;
  /* eslint-disable dot-notation */
  delete newObj['__typename'];

  if (keys.length) {
    keys.forEach((key: string) => {
      const value = newObj[key];
      if (value === 'true' || value === 'false') {
        newObj[key] = JSON.parse(value);
      }
    });
  }
  return newObj;
};

export default client;
