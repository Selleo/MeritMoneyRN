import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Avatar from 'src/components/Avatar'
import { greenFadedOpacity, white } from 'src/styles/colors'

export default class User extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar badgeCounter={4} showBadge size={60} />
        <Text style={styles.userName}>Imie Imie</Text>
        <Text>X</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopColor: greenFadedOpacity,
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userName: {
    color: white,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
})
