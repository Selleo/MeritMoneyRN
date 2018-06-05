import React, { Component } from 'react'
import { AppRegistry, YellowBox, Text, TextInput } from 'react-native'

import App from './src'
import Provider from './src/Context'

const config = {
  allowFontScaling: false,
}

// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
Text.defaultProps = config
TextInput.defaultProps = config

export default class Main extends Component {
  render() {
    return (
      <Provider>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MeritMoney', () => Main)
