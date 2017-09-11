import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Auth0 from 'react-native-auth0'
import { Button } from 'react-native-elements'
import jwtDecoder from 'jwt-decode'
import { CLIENT_ID, DOMAIN_URL } from 'react-native-dotenv'

import { PRIMARY_COLOR } from './utils/variables'
import UserListElement from './UserListElement'

export default class Main extends Component {
  state = {
    loading: true,
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
      })
      .then(({ idToken }) => {
        this.setState({ userInfo: jwtDecoder(idToken) })
      })
  }

  render() {
    const { userInfo } = this.state

    if (!userInfo) {
      return (
        <View style={styles.login}>
          <Button
            backgroundColor={PRIMARY_COLOR}
            borderRadius={50}
            large
            raised
            onPress={this.authorize}
            testID="loginButton"
            title='Loading'
          />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <UserListElement />
      </View>
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
