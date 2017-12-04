import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'
import { isEmpty } from 'lodash'

import { PRIMARY_COLOR, WHITE_COLOR, GREEN_COLOR, RED_COLOR } from '../utils/variables'
import store from '../store/configureStore'

export default class TopBar extends Component {
  state = { currentUser: {} }

  componentWillMount = () => {
    this.setState({
      currentUser: {
        ...store.getState().currentUser,
        ...store.getState().participants.currentParticipant.generatedInfo,
      },
    })

    this.unsubscribe = store.subscribe(() =>
      this.setState({
        currentUser: {
          ...store.getState().currentUser,
          ...store.getState().participants.currentParticipant.generatedInfo,
        },
      })
    )
  }

  componentWillUnmount = () => {
    this.unsubscribe()
  }

  render() {
    const { currentUser } = this.state

    if (isEmpty(currentUser)) {
      return (
        <Header
          leftComponent={
            <View style={styles.avatar}>
              <Avatar icon={{ name: 'person' }} medium rounded />
              <Text style={styles.headerText}>0 left</Text>
            </View>
          }
          rightComponent={
            <View style={styles.kudoCounter}>
              <Text style={styles.headerText}>0 (0)</Text>
              <Icon iconStyle={styles.greenIcon} name={'keyboard-arrow-up'} size={35} />
            </View>
          }
          style={styles.container}
        />
      )
    }

    const { picture, kudosLeft, lastAmountOfKudos, totalAmountOfKudos } = currentUser

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
              {lastAmountOfKudos} ({totalAmountOfKudos})
            </Text>
            <Icon
              iconStyle={[true ? styles.greenIcon : styles.redIcon]}
              name={true ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  greenIcon: {
    color: GREEN_COLOR,
  },
  redIcon: {
    color: RED_COLOR,
  },
  headerText: {
    color: WHITE_COLOR,
    padding: 10,
  },
  kudoCounter: {
    flexDirection: 'row',
  },
})
