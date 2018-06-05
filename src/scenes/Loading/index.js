import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, StyleSheet, StatusBar, View } from 'react-native'

export default class Loading extends Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const authToken = await AsyncStorage.getItem('authToken')
    setTimeout(() => this.props.navigation.navigate(authToken ? 'App' : 'Login'), 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
