import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Collectors extends Component {
  render() {
    return (
      <View testID="collectorsContainer" style={styles.container}>
        <View style={styles.firstPlace} />
        <View style={styles.secondPlace} />
        <View style={styles.thirdPlace} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  thirdPlace: {
    height: '50%',
    width: 50,
    backgroundColor: '#888',
    alignSelf: 'flex-end'
  },
  secondPlace: {
    height: '75%',
    width: 50,
    backgroundColor: '#888',
    alignSelf: 'flex-end'
  },
  firstPlace: {
    height: '100%',
    width: 50,
    backgroundColor: '#888',
    alignSelf: 'flex-end'
  }
})
