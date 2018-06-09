import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable'

import Avatar from 'src/components/Avatar'

import { white, greenFadedOpacity } from 'src/styles/colors'
import CollapsibleContent from './CollapsibleContent'
import sections from './usersData'
import Icon from 'src/components/Icon'

export default class UserList extends Component {
  state = {
    activeUser: false,
  }

  _changeUser = activeUser => this.setState({ activeUser })

  _renderContent = (_, i, isActive) => (
    <Animatable.View
      animation={isActive ? 'bounceInDown' : undefined}
      duration={300}
      // Handle automatic resize of Animatable
      style={[styles.content, isActive && styles.keepHeight]}
    >
      <CollapsibleContent closeCollapsible={this._changeUser} />
    </Animatable.View>
  )

  _renderHeader = ({ quantity, name }, i, isActive) => (
    <Animatable.View duration={300} style={styles.userInfoContainer} transition="backgroundColor">
      <Animatable.View>
        <Avatar badgeCounter={quantity} showBadge size={60} />
      </Animatable.View>
      <Text style={styles.userName}>{name}</Text>
      <Icon color={white} name={isActive ? 'chevron-up' : 'chevron-down'} size={25} />
    </Animatable.View>
  )

  render() {
    const { activeUser } = this.state
    const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableWithoutFeedback

    return (
      <ScrollView style={styles.container}>
        <Accordion
          activeSection={activeUser}
          duration={300}
          onChange={this._changeUser}
          renderContent={this._renderContent}
          renderHeader={this._renderHeader}
          sections={sections}
          touchableComponent={Touchable}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keepHeight: { height: 220 },
  userName: {
    color: white,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 10,
  },
  userInfoContainer: {
    alignItems: 'center',
    borderTopColor: greenFadedOpacity,
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
