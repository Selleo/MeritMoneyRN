import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import Auth0 from 'react-native-auth0'
import { CLIENT_ID, DOMAIN_URL } from 'react-native-dotenv'
import { connect } from 'react-redux'

import { actions as currentUserActions } from '../../store/currentUser'

export class Login extends Component {
  static propTypes = {
    setCurrentUser: PropTypes.func.isRequired,
  }

  _authorize = async () => {
    let auth0 = new Auth0({
      clientId: CLIENT_ID,
      domain: `https://${DOMAIN_URL}`,
    })

    auth0.webAuth
      .authorize({
        audience: `https://${DOMAIN_URL}/userinfo`,
        scope: 'openid email profile',
      })
      .then(({ idToken }) => this.props.setCurrentUser({ idToken }))
  }

  render() {
    return (
      <View>
        <Button onPress={this._authorize} title="Login" />
      </View>
    )
  }
}

const mapDispatchToProps = {
  setCurrentUser: currentUserActions.setCurrentUser,
}

export default connect(null, mapDispatchToProps)(Login)
