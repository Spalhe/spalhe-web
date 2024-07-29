import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export type Identifier = {
  token: string
  namingSystem: string
  subscriptionkey: string
}

export const api_url =
  'https://wnz425akfuc7utljzwljiqud6y0wpkiq.lambda-url.us-east-1.on.aws'

export class GraphqlClient {
  readonly client: ApolloClient<any>

  constructor() {
    const ssrMode = typeof window === 'undefined'

    const httpLink = createHttpLink({
      uri: `${api_url}/graphql`,
      headers: {},
    })

    this.client = new ApolloClient({
      cache: new InMemoryCache({
        addTypename: false,
      }),
      link: httpLink,
      ssrMode,
    })
  }
}
