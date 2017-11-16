import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store/configureStore'
import Navigation from './src/scenes'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('meritMoneyNative', () => App)
