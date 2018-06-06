import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import TextGradient from 'src/components/TextGradient'

export default class Users extends Component {
  render() {
    return (
      <View>
        <TextGradient style={styles.header}>KUDO BOARD</TextGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
})
