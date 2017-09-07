import React, { Component } from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import Auth0 from 'react-native-auth0'
import { CLIENT_ID, DOMAIN_URL } from 'react-native-dotenv'
import jwtDecoder from 'jwt-decode'

export default class Main extends Component {
  componentWillMount = () => {
    if (!AsyncStorage.getItem('credentials')) {
      const auth0 = new Auth0({
        domain: `https://${DOMAIN_URL}`,
        clientId: CLIENT_ID,
      })

      auth0
        .webAuth
        .authorize({
          audience: `https://${DOMAIN_URL}/userinfo`,
          scope: 'openid email',
        })
        .then(creds => {
          AsyncStorage.setItem('credentials', jwtDecoder(creds))
        })
    }
  }

  render() {
    return (
      <View>
        <Text testID="main"> MeritMoney </Text>
      </View>
    )
  }
}
