import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import createStackNavigation from './scenes/createStackNavigator'

export class AppContainer extends Component {
  static propTypes = {
    currentUserQuery: PropTypes.object.isRequired,
  }

  render() {
    const { loading, currentUser } = this.props.currentUserQuery
    if (loading) return null

    const Navigation = createStackNavigation(currentUser)

    return <Navigation />
  }
}

const currentUserQuery = gql`
  query {
    currentUser {
      email
      email_verified
      name
      given_name
      family_name
      picture
      gender
      locale
      user_id
      nickname
      created_at
    }
  }
`

export default compose(graphql(currentUserQuery, { name: 'currentUserQuery' }))(AppContainer)
