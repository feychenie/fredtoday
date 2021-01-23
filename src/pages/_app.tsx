import "../styles/globals.css";
import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { createClient } from "lib/api/createClient";

function MyApp({ Component, pageProps }) {
  const client = React.useMemo(() => createClient(), []);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
