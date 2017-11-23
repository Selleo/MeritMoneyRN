import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0'
import { CLIENT_ID, AUTH0_DOMAIN_URL } from 'react-native-dotenv'

const auth0 = new Auth0({ clientId: CLIENT_ID, domain: AUTH0_DOMAIN_URL })

export default class Login extends Component {
  _authorize = async () => {
    auth0.webAuth
      .authorize({
        audience: `${AUTH0_DOMAIN_URL}/userinfo`,
        scope: 'openid email profile',
      })
      .then(({ idToken }) => {
        AsyncStorage.setItem('idToken', idToken)
      })
  }

  render() {
    return (
      <View>
        <Button onPress={this._authorize} title="Login" />
      </View>
    )
  }
}
