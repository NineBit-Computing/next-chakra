// pages/_app.tsx
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
