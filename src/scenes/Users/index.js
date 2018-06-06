import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import TextGradient from 'src/components/TextGradient'

export default class Users extends Component {
  render() {
    return (
      <ScrollView>
        <TextGradient style={styles.header}>KUDO BOARD</TextGradient>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
  },
})
