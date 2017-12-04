import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { get } from 'lodash'

import { participantsQuery } from '../../graphql/queries'
import { actions as participantsActions } from '../../store/participants'
import { GREEN_COLOR } from '../../utils/variables'

export class UserProfile extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    participantsQuery: PropTypes.object,
    screenProps: PropTypes.object.isRequired,
    setCurrentParticipant: PropTypes.func.isRequired,
    setParticipants: PropTypes.func.isRequired,
  }

  componentWillReceiveProps({ participantId, participantsQuery: { loading, participants } }) {
    if (!loading) {
      this.props.setParticipants(participants)
      if (!participantId) {
        this.props.setCurrentParticipant(get(participants, '[0]._id', {}))
      }
    }
  }

  _navigateToOrganizationForm = () => {
    const { screenProps } = this.props
    screenProps.rootNavigation.navigate('OrganizationForm')
  }

  _setCurrentParticipant = id => {
    const { setCurrentParticipant, navigation: { navigate } } = this.props
    setCurrentParticipant(id)
    navigate('Users')
  }

  render() {
    const { participantsQuery, participantId } = this.props
    if (!participantsQuery || participantsQuery.loading) return null
    const { participants } = participantsQuery

    return (
      <View style={styles.container}>
        <Button onPress={this._navigateToOrganizationForm} title="Create new organization" />
        <Text style={styles.text}>Your organizations:</Text>
        <ScrollView>
          {participants.map(({ _id, organization: { name } }) => (
            <Button
              buttonStyle={[styles.organization, participantId === _id ? styles.active : '']}
              key={_id}
              onPress={() => this._setCurrentParticipant(_id)}
              title={name}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  active: {
    backgroundColor: GREEN_COLOR,
  },
  organization: {
    marginTop: 10,
    width: 300,
  },
})

const mapStateToProps = ({ currentUser, participants }) => ({
  id: currentUser._id,
  participantId: participants.currentParticipant._id,
})

const mapDispatchToProps = {
  setCurrentParticipant: participantsActions.setCurrentParticipant,
  setParticipants: participantsActions.setParticipants,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(participantsQuery, {
    name: 'participantsQuery',
    options: ({ id }) => ({
      skip: !id,
      variables: { id },
    }),
  })
)(UserProfile)
