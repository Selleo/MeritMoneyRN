import React, { Component } from 'react'
import { ScrollView, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'

import { PRIMARY_COLOR } from '../../utils/variables'
import UserListElement from './UserListElement'
import { allUsersQuery } from '../../graphql/queries'

export class Users extends Component {
  static propTypes = {
    allUsersQuery: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  state = {
    isRefreshing: false,
  }

  componentDidMount() {
    this.props.navigation.setParams({ ready: true })
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
  container: {
    flex: 1,
  },
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
})

export default compose(graphql(allUsersQuery, { name: 'allUsersQuery' }))(Users)
