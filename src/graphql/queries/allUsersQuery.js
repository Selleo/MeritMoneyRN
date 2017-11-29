import gql from 'graphql-tag'

export default gql`
  query {
    allUsers {
      _id
      name
      picture
    }
  }
`
