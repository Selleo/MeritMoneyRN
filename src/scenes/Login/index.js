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

  _goToOrganizationCreator = () => {
    this.props.navigation.navigate('OrganizationForm')
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
      <View>
        <View style={styles.container}>
          <View style={styles.userFlow}>
            <Button
              buttonStyle={styles.buttonStyle}
              icon={{ name: 'people-outline', color: PRIMARY_COLOR }}
              onPress={this._goToOrganizationCreator}
              raised
              title="Create organization"
            />
            <Button
              buttonStyle={styles.buttonStyle}
              icon={{ name: 'power-settings-new', color: PRIMARY_COLOR }}
              onPress={this._authorize}
              raised
              title="Login"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: SECONDARY_COLOR,
  },
  userFlow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
