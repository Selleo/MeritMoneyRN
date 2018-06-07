import React, { Component } from 'react'
import { View } from 'react-native'

import User from './User'

export default class UserList extends Component {
  render() {
    return (
      <View>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </View>
    )
  }
}
