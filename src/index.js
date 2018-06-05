import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import consumer from './hocs/consumer'
import MainNavigation from './MainNavigation'
import LoginNavigation from './LoginNavigation'

export class App extends Component {
  componentDidMount = async () => {
    const authToken = await AsyncStorage.getItem('authToken')
    this.props.setAuthToken(authToken)
  }

  render() {
    const { authToken } = this.props
    const Navigation = authToken ? MainNavigation : LoginNavigation

    return <Navigation />
  }
}

export default consumer(App)
