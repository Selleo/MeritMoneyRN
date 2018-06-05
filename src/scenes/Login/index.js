import React from 'react'
import { View, Button, StyleSheet, AsyncStorage } from 'react-native'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('authToken', 'abc')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._signInAsync} title="Sign in!" />
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
