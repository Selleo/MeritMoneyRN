import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

import consumer from 'src/hocs/consumer'
import { primaryLight } from 'src/styles/colors'
import Avatar from './Avatar'

export class AnimatedAvatar extends Component {
  state = {
    visible: true,
  }

  shouldComponentUpdate = nextProps =>
    this.props.avatarAnimationValue !== nextProps.avatarAnimationValue

  componentDidUpdate = () => {
    this.animate(this.props.avatarAnimationValue)
  }

  animate = visible => this.setState({ visible: !visible })

  render() {
    return (
      <Animatable.View
        animation={this.state.visible ? 'zoomIn' : 'zoomOut'}
        duration={300}
        style={styles.avatarContainer}
      >
        <View style={styles.avatarBorder}>
          <Avatar size={80} />
        </View>
      </Animatable.View>
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
