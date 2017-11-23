import React, { Component } from 'react'
import { ScrollView, StyleSheet, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'

import { PRIMARY_COLOR } from '../../utils/variables'
import UserListElement from './UserListElement'

export class Main extends Component {
  static propTypes = {
    allUsersQuery: PropTypes.object.isRequired,
  }

  state = {
    isRefreshing: false,
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 1000)
  }

  listUsers = users => users.map(user => <UserListElement key={user.name} user={user} />)

  render() {
    const { isRefreshing } = this.state
    const { loading, userMany } = this.props.allUsersQuery
    if (loading) return null

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[PRIMARY_COLOR]}
            onRefresh={this.onRefresh}
            progressBackgroundColor="#e2e2ff"
            refreshing={isRefreshing}
            tintColor={PRIMARY_COLOR}
            title="Loading..."
            titleColor="black"
          />
        }
        style={styles.container}
      >
        {this.listUsers(userMany)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
})

const allUsersQuery = gql`
  query {
    userMany {
      name
      picture
    }
  }
`

export default compose(graphql(allUsersQuery, { name: 'allUsersQuery' }))(Main)
