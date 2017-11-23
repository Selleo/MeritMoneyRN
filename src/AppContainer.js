import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import createStackNavigation from './scenes/createStackNavigator'

export class AppContainer extends Component {
  static propTypes = {
    userQuery: PropTypes.object.isRequired,
  }

  render() {
    const { loading, userOne } = this.props.userQuery
    if (loading) return null

    const Navigation = createStackNavigation(userOne)

    return <Navigation />
  }
}

const userQuery = gql`
  query {
    userOne(filter: { _id: "5a173b4e549afe001f58b5b5" }) {
      _id
    }
  }
`

export default compose(graphql(userQuery, { name: 'userQuery' }))(AppContainer)
