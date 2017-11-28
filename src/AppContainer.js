import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import createStackNavigation from './scenes/createStackNavigator'

export class AppContainer extends Component {
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

export default AppContainer
