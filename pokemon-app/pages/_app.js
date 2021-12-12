import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import client from "../graphql";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokemon - Hunter</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/gdx8okwg6gt/pokeball-png-45331_3aaPyYx66dF.png?updatedAt=1639143312370"
        />
      </Head>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
