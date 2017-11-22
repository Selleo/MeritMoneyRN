import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

export default class Hamsters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hamstersContainer} testID="hamstersContainer">
          <Avatar
            medium
            rounded
            source={{
              uri: 'https://www.emberjs.com/images/tomsters/teaching-reverse-79f66d70.png',
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.emberjs.com/images/tomsters/teaching-reverse-79f66d70.png',
            }}
            style={styles.image}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  hamstersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
})
