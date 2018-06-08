import React, { Component } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

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
      maxHeight: size,
      maxWidth: size,
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
    backgroundColor: primary,
    borderRadius: 12.5,
    height: 25,
    position: 'absolute',
    right: -5,
    top: 5,
    width: 25,
  },
  badgeText: {
    alignSelf: 'center',
    paddingTop: 2,
    justifyContent: 'center',
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  image: {
    zIndex: -1,
  },
})
