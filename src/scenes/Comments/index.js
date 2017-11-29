import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { PRIMARY_COLOR } from '../../utils/variables'

export default class Comments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Selleo team appreciate…</Text>
        <Text style={styles.section}>me for:</Text>
        <Text style={styles.section}>my colleagues for:</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  comment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  header: {
    color: PRIMARY_COLOR,
    fontSize: 26,
  },
  section: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    margin: 10,
  },
})
