import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://info-site.test/graphql',
  documents: ['documents/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'generates/gql/': {
      preset: 'client',
    },
  },
}

export default config
