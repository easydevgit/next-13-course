import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient('http://info-site.test/graphql', {
  fetch,
})
