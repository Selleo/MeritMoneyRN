/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Routes from './src/routes';

export default class App extends Component {
  render() {
    return (
      <Routes />
    )
  }
}

AppRegistry.registerComponent('meritMoneyNative', () => App)
