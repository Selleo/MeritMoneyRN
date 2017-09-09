import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import { Icon, Avatar,Rating } from 'react-native-elements'

export default class UserListElement extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  static defaultProps = {
    user: {
      name: 'John Doe',
      avatar: 'https://www.wykop.pl/cdn/c3201142/comment_lD8RanwxW9vxI4DNHXjEB2LLFh7wmnYk.jpg'
    }
  }
  state = {
    expanded: false,
    animation: new Animated.Value(),
  }

  toggle = () => {
    const {  animation, expanded, maxHeight, minHeight } = this.state
    let initialValue = expanded ? maxHeight + minHeight : minHeight,
        finalValue = expanded ? minHeight : maxHeight + minHeight

    this.setState({
        expanded: !expanded
    })

    animation.setValue(initialValue);
    Animated.spring(
      animation,
      {
        toValue: finalValue
      }
    ).start()
  }

  setMaxHeight = (event) => {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    })
  }

  setMinHeight = (event) => {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    })
  }

  render() {
    const { animation, expanded } = this.state
    const { avatar, name } = this.props.user
    return (
      <Animated.View style={[styles.container, {height: animation}]}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.toggle}
          underlayColor="#f1f1f1"
        >
        <View style={styles.userInfoContainer} onLayout={this.setMinHeight}>
          <Avatar medium rounded source={{uri: avatar}} avatarStyle={styles.avatar}/>
          <Text style={styles.userName}>{name}</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon
                style={styles.icon}
                name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              />
            </View>
          </View>
        </TouchableOpacity>
        {
          expanded &&
          <View style={styles.body} onLayout={this.setMaxHeight}>
            <Rating
              imageSize={40}
              onFinishRating={() => {}}
              showRating
              startingValue={1}
              type="star"
            />
          </View>
        }

    </Animated.View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden'
  },
  userInfoContainer: {
    flexDirection: 'row',
    padding: 10
  },
  userName: {
    flex: 1,
    padding: 10,
    color:'#2a2f43',
    fontWeight:'bold'
  },
  button: {

  },
  icon: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  },
});
