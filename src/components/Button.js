import React, { Component } from 'react'
import { Platform, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { secondaryLight, primary, white, blueDark } from 'src/styles/colors'

export default class Button extends Component {
  static defaultProps = {
    onPress: () => {},
  }

  render() {
    const { text, outline, onPress } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <LinearGradient
          colors={[secondaryLight, primary]}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          start={{ x: 0, y: 1 }}
          style={styles.linearGradient}
        >
          <View style={[styles.textContainer, outline && styles.outline]} />
          <Text adjustsFontSizeToFit={true} style={styles.text}>
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
  },
  linearGradient: {
    borderRadius: 25,
    zIndex: 1,
  },
  textContainer: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 25,
    height: 42,
    position: 'absolute',
    top: 2.5,
    width: 142,
    zIndex: 2,
    ...Platform.select({
      ios: {
        height: 42,
      },
      android: {
        height: 38,
      },
    }),
  },
  outline: {
    backgroundColor: blueDark,
  },
  text: {
    textAlign: 'center',
    color: white,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    paddingVertical: 10,
    zIndex: 3,
  },
})
