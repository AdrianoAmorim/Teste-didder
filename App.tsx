import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Routes from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = new HttpLink({
  uri: 'https://api.heitorurbanetz.com.br/',
});

const authLink = setContext(async(_, { headers }) => {
  const token = await AsyncStorage.getItem('AUTH_TOKEN');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  return (
      <ApolloProvider client={client}>
        <Routes/>
      </ApolloProvider>
  

  );
}
