import React, { Component } from 'react'
import { AppRegistry, StatusBar, YellowBox, Text, TextInput, View, StyleSheet } from 'react-native'

import App from './src'
import Provider from './src/Context'
import { white, blueDark } from './src/styles/colors'

const config = {
  allowFontScaling: false,
  style: {
    color: white,
    fontFamily: 'Lato-Regular',
  },
}

// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
Text.defaultProps = config
TextInput.defaultProps = config
StatusBar.setBarStyle('light-content')

export default class Main extends Component {
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <App />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: blueDark,
    flex: 1,
  },
})

AppRegistry.registerComponent('MeritMoney', () => Main)
