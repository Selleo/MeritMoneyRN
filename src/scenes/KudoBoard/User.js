import React, { Component } from 'react'
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Avatar from 'src/components/Avatar'
import { greenFadedOpacity, white } from 'src/styles/colors'
import Button from 'src/components/Button'
import StarRating from 'src/scenes/KudoBoard/StarRating'
import CommentInput from 'src/scenes/KudoBoard/CommentInput'

export default class User extends Component {
  state = {
    expanded: false,
    arrowAnimation: new Animated.Value(0),
    containerAnimation: new Animated.Value(0),
    opacityAnimation: new Animated.Value(0),
    maxHeight: 0,
    kudoAmount: 0,
    comment: '',
  }

  toggle = () => {
    const { expanded, containerAnimation, opacityAnimation, arrowAnimation } = this.state
    const value = expanded ? 0 : 1

    this.animate(containerAnimation, { toValue: value, duration: 200 })
    this.animate(opacityAnimation, { toValue: value, duration: 1000 })
    this.animate(arrowAnimation, { toValue: value })
    this.setState({ expanded: !!value })
  }

  animate = (element, { duration = 500, toValue }) =>
    Animated.timing(element, { duration, toValue }).start()

  setMaxHeight = ({ nativeEvent: { layout: { height } } }) => this.setState({ maxHeight: height })

  _handleCommentUpdate = comment => this.setState({ comment })

  _setKudoAmount = kudoAmount => () => this.setState({ kudoAmount })

  render() {
    const { opacityAnimation, containerAnimation, expanded, maxHeight, kudoAmount } = this.state
    const container = containerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-maxHeight, 0],
    })
    return (
      <Animated.View style={styles.container}>
        <TouchableOpacity onPress={this.toggle} underlayColor="#f1f1f1">
          <View style={styles.userInfoContainer}>
            <Avatar badgeCounter={4} showBadge size={60} />
            <Text style={styles.userName}>Imie Imie</Text>
            <Text>X</Text>
          </View>
        </TouchableOpacity>
        <Animated.View
          onLayout={this.setMaxHeight}
          style={[
            styles.body,
            !expanded && styles.displayNone,
            { opacity: opacityAnimation, transform: [{ translateY: container }] },
          ]}
        >
          <StarRating kudoAmount={kudoAmount} setKudoAmount={this._setKudoAmount} />
          <CommentInput handleCommentUpdate={this._handleCommentUpdate} />
          <Button text="GIVE KUDO" />
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    overflow: 'hidden',
  },
  userName: {
    color: white,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  body: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  displayNone: {
    display: 'none',
  },
  userInfoContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopColor: greenFadedOpacity,
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: 'hidden',
  },
})
