import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Auth0 from 'react-native-auth0'
import { Button } from 'react-native-elements'
import jwtDecoder from 'jwt-decode'
import { CLIENT_ID, DOMAIN_URL } from 'react-native-dotenv'

import { PRIMARY_COLOR } from './utils/variables'
import UserListElement from './UserListElement'

import { actions as currentUserActions } from './store/currentUser'
import { actions as usersActions } from './store/users'

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

  authorize = async () => {
    let auth0 = new Auth0({
      clientId: CLIENT_ID,
      domain: `https://${DOMAIN_URL}`,
    })

    auth0
      .webAuth
      .authorize({
        audience: `https://${DOMAIN_URL}/userinfo`,
        scope: 'openid email profile',
      }).then(({ idToken }) => this.props.setCurrentUser(jwtDecoder(idToken)))
  }

  listUsers = () => this.props.users.map((user, i) => <UserListElement key={i} user={user} />)

  render() {
    const { currentUser } = this.props
    const { isRefreshing } = this.state

    if (!currentUser.name) {
      return (
        <View style={styles.login}>
          <Button
            backgroundColor={PRIMARY_COLOR}
            borderRadius={50}
            large
            raised
            onPress={this.authorize}
            testID="loginButton"
            title='Login'
          />
        </View>
      )
    }

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.onRefresh}
            tintColor={PRIMARY_COLOR}
            title="Loading..."
            titleColor="black"
            colors={[PRIMARY_COLOR]}
            progressBackgroundColor="#e2e2ff"
          />
        }
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
    flex: 1
  }
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
