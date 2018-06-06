import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { white } from 'src/styles/colors'
import Avatar from './Avatar'

export default class AnimatedAvatar extends Component {
  state = {
    animatedValue: new Animated.Value(1),
  }

  componentDidMount = () => {
    setTimeout(this.animate, 3000)
  }

  animate = toValue => {
    Animated.timing(this.state.animatedValue, {
      toValue,
      useNativeDriver: true,
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
        <Avatar size={80} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 40,
    height: 80,
    width: 80,
    backgroundColor: white,
    alignSelf: 'center',
    position: 'absolute',
    top: 30,
    marginBottom: 100,
  },
})
