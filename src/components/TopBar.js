import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'
import { isEmpty } from 'lodash'

import { PRIMARY_COLOR } from '../utils/variables'
import store from '../store/configureStore'

export class TopBar extends Component {
  state = { currentUser: {} }

  render() {
    const { currentUser } = this.state

    if (isEmpty(currentUser)) {
      store.subscribe(() => this.setState({ currentUser: store.getState().currentUser }))

      return (
        <Header
          centerComponent={{ text: 'MeritMoney', style: { color: 'white', fontSize: 24 } }}
          leftComponent={
            <View style={styles.avatar}>
              <Avatar icon={{ name: 'person' }} medium rounded />
              <Text style={styles.headerText}>0 left</Text>
            </View>
          }
          rightComponent={
            <View style={styles.kudoCounter}>
              <Text style={styles.headerText}>0 (0)</Text>
              <Icon iconStyle={{ color: 'green' }} name={'keyboard-arrow-up'} size={35} />
            </View>
          }
          style={styles.container}
        />
      )
    }

    const {
      picture,
      hasReceivedMoreThanLastWeek,
      lastWeekKudos,
      sinceLastBonus,
      kudosLeft,
    } = currentUser

    return (
      <Header
        centerComponent={{ text: 'MeritMoney', style: { color: 'white', fontSize: 24 } }}
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
