import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

import { PRIMARY_COLOR } from './utils/variables'

export default class TopBar extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
  }

  static defaultProps = {
    currentUser: {
      avatar: 'https://www.wykop.pl/cdn/c3201142/comment_lD8RanwxW9vxI4DNHXjEB2LLFh7wmnYk.jpg',
      hasReceivedMoreThanLastWeek: true,
      lastWeekKudos: 12,
      sinceLastBonus: 123,
      kudosLeft: 20,
    }
  }

  render() {
    const {
      avatar,
      hasReceivedMoreThanLastWeek,
      lastWeekKudos,
      sinceLastBonus,
      kudosLeft
    } = this.props.currentUser

    return (
      <Header
        style={styles.container}
        leftComponent={
          <View style={styles.avatar}>
            <Avatar medium rounded source={{uri: avatar}} />
            <Text style={styles.headerText}>{kudosLeft} left</Text>
          </View>
        }
        rightComponent={
          <View style={styles.kudoCounter}>
            <Text style={styles.headerText}>{lastWeekKudos} ({sinceLastBonus})</Text>
            <Icon
              name={hasReceivedMoreThanLastWeek ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              iconStyle={{color: hasReceivedMoreThanLastWeek ? 'green' : 'red'}}
              size={35}
            />
          </View>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'row',
    paddingTop: 15,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  headerText: {
    padding: 10
  },
  kudoCounter: {
    flexDirection: 'row',
  }
})
