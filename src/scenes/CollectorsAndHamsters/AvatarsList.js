import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Avatar from 'src/components/Avatar'
import { white } from 'src/styles/colors'
export default class AvatarsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Dominik{'\n'} Duda</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Jak{'\n'}Smies</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Bartłomiej{'\n'}Wójtowicz</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Grzegorz{'\n'}aaaaa</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Panie{'\n'}Janie</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Rano{'\n'}Wstań</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userContainer: {
    paddingHorizontal: 15,
  },
  name: {
    paddingVertical: 10,
    paddingBottom: 5,
    color: white,
    textAlign: 'center',
  },
})
