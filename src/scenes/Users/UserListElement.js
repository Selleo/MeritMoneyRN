import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Icon, Badge, FormInput, FormLabel } from 'react-native-elements'
import StarRating from 'react-native-star-rating'

import { PRIMARY_COLOR } from '../../utils/variables'

export default class UserListElement extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  state = {
    animation: new Animated.Value(),
    comment: '',
    expanded: false,
    rating: 1,
    maxHeight: 180,
  }

  toggle = () => {
    const { animation, expanded, maxHeight, minHeight } = this.state
    const sumHeight = maxHeight + minHeight
    const initialValue = expanded ? sumHeight : minHeight
    const finalValue = expanded ? minHeight : sumHeight

    this.setState({ expanded: !expanded })

    animation.setValue(initialValue)
    Animated.spring(animation, { toValue: finalValue }).start()
  }

  submit = () => {
    this.setState({ disabled: true })

    setTimeout(() => {
      this.setState({ disabled: false, rating: 1 })
      this.toggle()
    }, 1000)
  }

  setMaxHeight = ({ nativeEvent }) => this.setState({ maxHeight: nativeEvent.layout.height })
  setMinHeight = ({ nativeEvent }) => this.setState({ minHeight: nativeEvent.layout.height })

  render() {
    const { picture, name, givenKudos } = this.props.user
    const { animation, disabled, expanded, rating } = this.state

    return (
      <Animated.View style={[styles.container, { height: animation }]}>
        <TouchableOpacity onPress={this.toggle} underlayColor="#f1f1f1">
          <View onLayout={this.setMinHeight} style={styles.userInfoContainer}>
            <Avatar avatarStyle={styles.avatar} medium rounded source={{ uri: picture }} />
            <Badge value={givenKudos || 0} />
            <Text style={styles.userName}> {name} </Text>
            <View style={styles.userInfoExpanded}>
              <Icon
                name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableOpacity>

        {expanded && (
          <View onLayout={this.setMaxHeight} style={styles.body}>
            <StarRating
              maxStars={5}
              rating={rating}
              selectedStar={rating => {
                this.setState({ rating })
              }}
            />
            <FormLabel>Comment</FormLabel>
            <FormInput
              onChangeText={comment => this.setState({ comment })}
              onSubmitEditing={this.submit}
              returnKeyType="send"
            />
            <Button
              backgroundColor={PRIMARY_COLOR}
              borderRadius={25}
              disabled={disabled}
              onPress={this.submit}
              style={styles.button}
              title="Send"
            />
          </View>
        )}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  button: {
    marginTop: 10,
  },
  body: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 25,
  },
  userInfoContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  userInfoExpanded: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
})
