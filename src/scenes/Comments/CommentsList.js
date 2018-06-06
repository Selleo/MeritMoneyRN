import React, { Component } from 'react'
import { View } from 'react-native'

import Comment from './Comment'

export default class CommentsList extends Component {
  render() {
    return (
      <View>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </View>
    )
  }
}
