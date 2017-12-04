import gql from 'graphql-tag'

export default gql`
  query currentParticipantsQuery($userId: MongoID, $organizationId: MongoID) {
    participants(filter: { organizationId: $organizationId }) {
      kudo(filter: { userId: $userId }) {
      }
    }
  }
`
