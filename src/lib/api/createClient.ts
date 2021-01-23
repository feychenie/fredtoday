import { ApolloClient, InMemoryCache } from "@apollo/client";

export function createClient() {
  const client = new ApolloClient({
    uri: process.env.PUBLIC_ENDPOINT,
    cache: new InMemoryCache(),
  });
  return client;
}
