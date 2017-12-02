import React, { Component } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import AnimatedCollector from './AnimatedCollector'

const { height } = Dimensions.get('window')

export default class Collectors extends Component {
  state = {
    firstKudo: 100,
    secondKudo: 75,
    thirdKudo: 50,
  }

  render() {
    const { firstKudo, secondKudo, thirdKudo } = this.state
    const allKudos = firstKudo + secondKudo + thirdKudo
    const proportionHeightToKudo = 2 * allKudos / height

    return (
      <View style={styles.container} testID="collectorsContainer">
        <AnimatedCollector targetHeight={firstKudo / proportionHeightToKudo}>
          <View style={styles.place} />
        </AnimatedCollector>
        <AnimatedCollector targetHeight={secondKudo / proportionHeightToKudo}>
          <View style={styles.place} />
        </AnimatedCollector>
        <AnimatedCollector targetHeight={thirdKudo / proportionHeightToKudo}>
          <View style={styles.place} />
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
  place: {
    width: 50,
  },
})
