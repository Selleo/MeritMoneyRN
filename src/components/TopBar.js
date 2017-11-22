import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'

import { PRIMARY_COLOR } from '../utils/variables'

export class TopBar extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
  }

  render() {
    const {
      picture,
      hasReceivedMoreThanLastWeek,
      lastWeekKudos,
      sinceLastBonus,
      kudosLeft
    } = this.props.currentUser

    if (!picture) { return <Header style={styles.container} /> }

    return (
      <Header
        style={styles.container}
        leftComponent={
          <View style={styles.avatar}>
            <Avatar medium rounded source={{ uri: picture }} />
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
  }
})

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

export default connect(mapStateToProps)(TopBar)
