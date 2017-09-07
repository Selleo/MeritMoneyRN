import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Auth0 from 'react-native-auth0'
import { Button, Rating } from 'react-native-elements'
import jwtDecoder from 'jwt-decode'
import { CLIENT_ID, DOMAIN_URL } from 'react-native-dotenv'

import TopBar from './TopBar';

export default class Main extends Component {
  state = {
    loading: true,
  }

  authorize = async () => {
    let auth0 = new Auth0({
      domain: `https://${DOMAIN_URL}`,
      clientId: CLIENT_ID,
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
        <View style={styles.container}>
          <Button
            onPress={this.authorize}
            testID="main"
            title='Loading'
          />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <TopBar />
        <Text testID="main"> MeritMoney </Text>
        <Rating
          imageSize={40}
          onFinishRating={() => {}}
          showRating
          startingValue={1}
          type="star"
        />
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
