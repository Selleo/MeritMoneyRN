import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

export default class TopBar extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
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
      <Header backgroundColor='#45aeea'
        leftComponent={
        <View style={styles.container}>
          <Avatar medium rounded source={{uri: avatar}} />
          <Text>{kudosLeft} left</Text>
        </View>}
        rightComponent={
          <View>
            <Icon
              name={hasReceivedMoreThanLastWeek ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              iconStyle={{color: hasReceivedMoreThanLastWeek ? 'green' : 'red'}}
              size={35}
            />
            <Text>{lastWeekKudos} ({sinceLastBonus})</Text>
          </View>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
})
