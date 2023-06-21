import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../theme/theme'
import { ApolloProvider } from '@apollo/client'
import { GraphqlClient } from 'services/graphql'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={new GraphqlClient().client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />;
      </ChakraProvider>
    </ApolloProvider>
  )
}
