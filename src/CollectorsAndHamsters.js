import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Collectors from './Collectors';
export default class CollectorsAndHamsters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CollectorsAndHamsters</Text>
        <Collectors />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})
