import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import Collectors from './Collectors'
import Hamsters from './Hamsters'

export default class CollectorsAndHamsters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>TOP Collectors</Text>
        </View>
        <Collectors />
        <Divider style={styles.divider} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Hamsters</Text>
        </View>
        <Hamsters />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    backgroundColor: 'blue',
    height: 1,
    margin: 10,
  },
  header: {
    fontSize: 26,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
