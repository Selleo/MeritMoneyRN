import gql from 'graphql-tag'

export default gql`
  mutation createOrganization($name: String!) {
    createOrganization(record: { name: $name })
  }
`
