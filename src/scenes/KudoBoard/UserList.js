import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable'

import Avatar from 'src/components/Avatar'

import { white, greenFadedOpacity } from 'src/styles/colors'
import CollapsibleContent from './CollapsibleContent'
import sections from './usersData'

export default class UserList extends Component {
  state = {
    activeUser: false,
  }

  _changeUser = activeUser => this.setState({ activeUser })

  _renderContent = (_, i, isActive) => (
    <Animatable.View
      animation={isActive ? 'bounceInDown' : undefined}
      duration={300}
      style={styles.content}
    >
      <CollapsibleContent closeCollapsible={this._changeUser} />
    </Animatable.View>
  )

  _renderHeader = ({ quantity, name }) => (
    <Animatable.View duration={300} style={styles.userInfoContainer} transition="backgroundColor">
      <Avatar badgeCounter={quantity} showBadge size={60} />
      <Text style={styles.userName}>{name}</Text>
      <Text>X</Text>
    </Animatable.View>
  )

  render() {
    const { activeUser } = this.state

    return (
      <View style={styles.container}>
        <Accordion
          activeSection={activeUser}
          duration={300}
          onChange={this._changeUser}
          renderContent={this._renderContent}
          renderHeader={this._renderHeader}
          sections={sections}
          touchableComponent={TouchableOpacity}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  userName: {
    color: white,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    alignItems: 'center',
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
