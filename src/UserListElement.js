import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Icon, Badge } from 'react-native-elements'
import StarRating from 'react-native-star-rating'

import { PRIMARY_COLOR } from './utils/variables'

export default class UserListElement extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  state = {
    animation: new Animated.Value(),
    comment: '',
    expanded: false,
    rating: 1,
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
    setTimeout(() => this.setState({ disabled: false }), 1000)
  }

  setMaxHeight = ({ nativeEvent }) => {
    this.setState({ maxHeight: nativeEvent.layout.height })
  }

  setMinHeight = ({ nativeEvent }) => {
    this.setState({ minHeight: nativeEvent.layout.height })
  }

  render() {
    const { avatar, name, givenKudos } = this.props.user
    const { animation, disabled, expanded, rating } = this.state

    return (
      <Animated.View style={[styles.container, { height: animation }]}>
        <TouchableOpacity
          onPress={this.toggle}
          underlayColor="#f1f1f1"
        >
        <View style={styles.userInfoContainer} onLayout={this.setMinHeight}>
          <Avatar medium rounded source={{uri: avatar}} avatarStyle={styles.avatar} />
          <Badge value={givenKudos} />
          <Text style={styles.userName}> {name} </Text>
            <View style={styles.userInfoExpanded}>
              <Icon
                style={styles.icon}
                name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              />
            </View>
          </View>
        </TouchableOpacity>

        {expanded &&
          <View style={styles.body} onLayout={this.setMaxHeight}>
            <TextInput
              onChangeText={comment => this.setState({ comment })}
              onSubmitEditing={this.submit}
              placeholder='Comment'
              returnKeyType='send'
            />
            <StarRating
              maxStars={5}
              rating={rating}
              selectedStar={(rating) => { this.setState({ rating })}}
            />
            <Button
              backgroundColor={PRIMARY_COLOR}
              borderRadius={25}
              disabled={disabled}
              style={styles.button}
              title="Send"
              onPress={this.submit}
            />
          </View>
        }
    </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
  },
  button: {
    marginTop: 10,
  },
  body: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 25
  },
  userInfoContainer: {
    flexDirection: 'row',
    padding: 10
  },
  userInfoExpanded: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
})
