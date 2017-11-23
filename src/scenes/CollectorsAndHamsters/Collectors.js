import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import AnimatedCollector from './AnimatedCollector'

export default class Collectors extends Component {
  state = {
    firstKudos: 100,
    secondKudos: 75,
    thirdKudos: 50,
  }

  render() {
    const { firstKudos, secondKudos, thirdKudos } = this.state
    const allKudo = firstKudos + secondKudos + thirdKudos

    return (
      <View style={styles.container} testID="collectorsContainer">
        <AnimatedCollector
          style={{ width: 50, height: 50, backgroundColor: '#888' }}
          targetHeight={firstKudos / allKudo * 370}
        >
          <View style={styles.firstPlace} />
        </AnimatedCollector>
        <AnimatedCollector
          style={{ width: 50, height: 50, backgroundColor: '#888' }}
          targetHeight={secondKudos / allKudo * 370}
        >
          <View style={styles.secondPlace} />
        </AnimatedCollector>
        <AnimatedCollector
          style={{ width: 50, height: 50, backgroundColor: '#888' }}
          targetHeight={thirdKudos / allKudo * 370}
        >
          <View style={styles.thirdPlace} />
        </AnimatedCollector>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  thirdPlace: {
    width: 50,
  },
  secondPlace: {
    width: 50,
  },
  firstPlace: {
    width: 50,
  },
})
