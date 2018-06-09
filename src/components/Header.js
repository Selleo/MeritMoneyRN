import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { white, secondaryLight, primary } from 'src/styles/colors'
import Icon from 'src/components/Icon'
import LinearGradient from 'react-native-linear-gradient'

export default class Header extends Component {
  render() {
    return (
      <LinearGradient
        colors={[secondaryLight, primary]}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Icon name="star-empty" size={18} style={styles.star} />
            <Text style={styles.text}>15 left</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>24(54)</Text>
            <Text>^</Text>
          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  headerContainer: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: white,
  },
  textContainer: {
    flexDirection: 'row',
  },
  star: {
    color: white,
    paddingHorizontal: 5,
  },
})
