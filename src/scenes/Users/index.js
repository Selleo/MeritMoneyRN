import React, { Component } from 'react'
import { ScrollView, StyleSheet, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PRIMARY_COLOR } from '../../utils/variables'
import { actions as currentUserActions } from '../../store/currentUser'
import { actions as usersActions } from '../../store/users'

import UserListElement from './UserListElement'

export class Main extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    getUsers: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  }

  state = {
    isRefreshing: false,
  }

  componentWillMount = () => {
    this.props.getUsers()
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 1000)
  }

  listUsers = () => this.props.users.map(user => <UserListElement key={user.name} user={user} />)

  render() {
    const { isRefreshing } = this.state

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
        {this.listUsers()}
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

const mapStateToProps = ({ currentUser, users }) => ({
  currentUser,
  users,
})

const mapDispatchToProps = {
  setCurrentUser: currentUserActions.setCurrentUser,
  getUsers: usersActions.getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
