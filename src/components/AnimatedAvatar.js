import React, { Component } from 'react'
import { Animated, View, StyleSheet } from 'react-native'

import consumer from 'src/hocs/consumer'
import { primaryLight } from 'src/styles/colors'
import Avatar from './Avatar'

export class AnimatedAvatar extends Component {
  state = {
    animatedValue: new Animated.Value(1),
  }

  componentDidUpdate = () => {
    this.animate(this.props.avatarAnimationValue)
  }

  animate = toValue => {
    Animated.timing(this.state.animatedValue, {
      toValue,
      useNativeDriver: true,
      duration: 200,
    }).start()
  }

  render() {
    const interpolatedValue = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })

    return (
      <Animated.View
        style={[
          styles.avatarContainer,
          {
            transform: [{ scaleX: interpolatedValue }, { scaleY: interpolatedValue }],
          },
        ]}
      >
        <View style={styles.avatarBorder}>
          <Avatar size={80} />
        </View>
      </Animated.View>
    )
  }
}

export default consumer(AnimatedAvatar)

const styles = StyleSheet.create({
  avatarContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: 25,
    zIndex: 2,
  },
  avatarBorder: {
    borderRadius: 45,
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: primaryLight,
    zIndex: 3,
  },
})
