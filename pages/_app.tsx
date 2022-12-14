import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
// css
import "styles/globals.css";
// store
import { store } from "@redux/store";
import { Provider } from "react-redux";

const baseURL = process.env.NEXT_PUBLIC_ENDPOINT;

const client = new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          character: {
            read(_: any, { args, toReference }: any) {
              return toReference({
                __typename: "Character",
                id: args?.id,
              });
            },
          },
        },
      },
    },
  }),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Rick y Morty</title>
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
