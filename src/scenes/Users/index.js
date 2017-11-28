import React, { Component } from 'react'
import { ScrollView, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'
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

  listUsers = users => users.map(user => <UserListElement key={user._id} user={user} />)

  render() {
    const { isRefreshing } = this.state
    const { loading, allUsers } = this.props.allUsersQuery
    if (loading) return <ActivityIndicator size="large" style={styles.loader} />

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
        {this.listUsers(allUsers)}
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
  loader: {
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
  },
  container: {
    flex: 1,
  },
})

const allUsersQuery = gql`
  query {
    allUsers {
      _id
      name
      picture
    }
  }
`

export default compose(graphql(allUsersQuery, { name: 'allUsersQuery' }))(Main)
