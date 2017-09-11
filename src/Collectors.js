import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar } from 'react-native-elements'

export default class Collectors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstPlace}>
          <Avatar medium source={{uri: 'https://www.wykop.pl/cdn/c3201142/comment_lD8RanwxW9vxI4DNHXjEB2LLFh7wmnYk.jpg'}} />
        </View>
        <View style={styles.secondPlace}>
          <Avatar medium source={{uri: 'https://www.wykop.pl/cdn/c3201142/comment_lD8RanwxW9vxI4DNHXjEB2LLFh7wmnYk.jpg'}} />
        </View>
        <View style={styles.thirdPlace}>
          <Avatar medium source={{uri: 'https://www.wykop.pl/cdn/c3201142/comment_lD8RanwxW9vxI4DNHXjEB2LLFh7wmnYk.jpg'}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  thirdPlace: {
    height: '50%',
    width: 50,
    backgroundColor: '#888',
    alignSelf: 'flex-end'
  },
  secondPlace: {
    height: '75%',
    width: 50,
    backgroundColor: '#888',
    alignSelf: 'flex-end'
  },
  firstPlace: {
    height: '100%',
    width: 50,
    backgroundColor: '#888',
    alignSelf: 'flex-end'
  }
})
