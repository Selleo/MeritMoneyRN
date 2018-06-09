import React, { Component } from 'react'
import { Platform, Image, View, Text, StyleSheet } from 'react-native'

import { white, primary } from 'src/styles/colors'

export default class Avatar extends Component {
  static defaultProps = {
    size: 50,
    source: 'https://i.imgur.com/ckqCXMS.png',
  }

  render() {
    const { size, source, showBadge, badgeCounter } = this.props
    const avatarStyles = {
      height: size,
      width: size,
      borderRadius: size / 2,
    }

    return (
      <View style={[styles.container, avatarStyles]}>
        {showBadge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeCounter}</Text>
          </View>
        )}
        <Image source={{ uri: source }} style={[avatarStyles, styles.image]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
  },
  badgeContainer: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 12.5,
    height: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    position: 'absolute',
    width: 25,
    ...Platform.select({
      ios: {
        right: -5,
        top: 5,
      },
      android: {
        top: 0,
        left: 0,
      },
    }),
  },
  badgeText: {
    paddingTop: 2,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  image: {
    zIndex: -1,
  },
})
