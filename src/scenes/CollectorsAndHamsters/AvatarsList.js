import React, { Component } from 'react'
import { View } from 'react-native'

import Avatar from 'src/components/Avatar'
export default class AvatarsList extends Component {
  render() {
    return (
      <View>
        <Avatar size={100} />
        <Avatar size={100} />
        <Avatar size={100} />
        <Avatar size={100} />
        <Avatar size={100} />
        <Avatar size={100} />
      </View>
    )
  }
}
