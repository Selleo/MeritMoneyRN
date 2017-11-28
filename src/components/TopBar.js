import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

import { PRIMARY_COLOR } from '../utils/variables'

export class TopBar extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
  }

  render() {
    const { currentUser } = this.props
    if (!currentUser)
      return (
        <Header
          centerComponent={{ text: 'Merit Money', style: { color: 'white', fontSize: 24 } }}
          style={styles.container}
        />
      )

    const {
      picture,
      hasReceivedMoreThanLastWeek,
      lastWeekKudos,
      sinceLastBonus,
      kudosLeft,
    } = currentUser

    return (
      <Header
        leftComponent={
          <View style={styles.avatar}>
            <Avatar medium rounded source={{ uri: picture }} />
            <Text style={styles.headerText}>{kudosLeft} left</Text>
          </View>
        }
        rightComponent={
          <View style={styles.kudoCounter}>
            <Text style={styles.headerText}>
              {lastWeekKudos} ({sinceLastBonus})
            </Text>
            <Icon
              iconStyle={{ color: hasReceivedMoreThanLastWeek ? 'green' : 'red' }}
              name={hasReceivedMoreThanLastWeek ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={35}
            />
          </View>
        }
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    height: 75,
    paddingTop: 15,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  headerText: {
    padding: 10,
    color: '#fff',
  },
  kudoCounter: {
    flexDirection: 'row',
  },
})

export default TopBar
