import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, AsyncStorage, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0'
import { CLIENT_ID, AUTH0_DOMAIN_URL } from 'react-native-dotenv'

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/variables'

const auth0 = new Auth0({ clientId: CLIENT_ID, domain: AUTH0_DOMAIN_URL })

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  _authorize = async () => {
    auth0.webAuth
      .authorize({
        audience: `${AUTH0_DOMAIN_URL}/userinfo`,
        scope: 'openid email profile',
      })
      .then(({ idToken }) =>
        AsyncStorage.setItem('idToken', idToken).then(() => this.props.navigation.navigate('Main'))
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userFlow}>
          <Button
            buttonStyle={styles.buttonStyle}
            icon={{ name: 'power-settings-new', color: PRIMARY_COLOR }}
            onPress={this._authorize}
            raised
            title="Login"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: SECONDARY_COLOR,
  },
  userFlow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
