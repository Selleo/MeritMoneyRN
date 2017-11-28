import React, { Component } from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'

import createStackNavigation from './src/createStackNavigator'

export default class App extends Component {
  state = {
    apolloClient: null,
  }

  componentWillMount = async () => {
    this.setState({ apolloClient: await client() })
  }

  state = {
    idToken: '',
  }

  componentWillMount = async () => {
    this.setState({ idToken: await AsyncStorage.getItem('idToken') })
  }

  render() {
    const { idToken } = this.state
    if (idToken === '') return null

    const Navigation = createStackNavigation(idToken)
    return <Navigation />
  }
}

AppRegistry.registerComponent('meritMoneyNative', () => App)
