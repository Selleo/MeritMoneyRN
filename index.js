/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Navigation from './src/scenes';

export default class App extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}

AppRegistry.registerComponent('meritMoneyNative', () => App)
