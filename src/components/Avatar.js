import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

import { white } from 'src/styles/colors'

export default class Avatar extends Component {
  static defaultProps = {
    size: 50,
    source: 'image',
  }

  render() {
    const { size, source } = this.props
    const avatarStyles = {
      height: size,
      width: size,
      borderRadius: size / 2,
    }

    return (
      <View style={[styles.container, avatarStyles]}>
        <Image source={{ uri: source }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
  },
})
