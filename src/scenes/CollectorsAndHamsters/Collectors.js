import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Collectors extends Component {
  render() {
    return (
      <View style={styles.container} testID="collectorsContainer">
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
    alignSelf: 'flex-end',
    backgroundColor: '#888',
    height: '50%',
    width: 50,
  },
  secondPlace: {
    alignSelf: 'flex-end',
    backgroundColor: '#888',
    height: '75%',
    width: 50,
  },
  firstPlace: {
    alignSelf: 'flex-end',
    backgroundColor: '#888',
    height: '100%',
    width: 50,
  },
})
