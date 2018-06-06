import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import Comment from './Comment'

export default class CommentsList extends Component {
  render() {
    return (
      <ScrollView>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollView>
    )
  }
}
