import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import consumer from './hocs/consumer'
import AppNavigation from './navigators/AppNavigation'
import AnimatedAvatar from './components/AnimatedAvatar'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.authToken && <AnimatedAvatar />}
        <AppNavigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default consumer(App)
