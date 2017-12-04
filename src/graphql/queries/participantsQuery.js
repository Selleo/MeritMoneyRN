import gql from 'graphql-tag'

export default gql`
  query participantsQuery($userId: MongoID) {
    participants(filter: { userId: $userId }) {
      _id
      pending
      admin
      organization {
        _id
        name
        kudosPerReset
        lastReset
      }
      userId
      createdAt
      generatedInfo {
        kudosLeft
        lastAmountOfKudos
        totalAmountOfKudos
        isHamster
      }
    }
  }
`
