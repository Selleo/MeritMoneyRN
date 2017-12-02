import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, StyleSheet, View } from 'react-native'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import { participantsQuery } from '../../graphql/queries'

export class UserProfile extends Component {
  static propTypes = {
    screenProps: PropTypes.object.isRequired,
    participantsQuery: PropTypes.object,
  }

  _navigateToOrganizationForm = () => {
    const { screenProps } = this.props
    screenProps.rootNavigation.navigate('OrganizationForm')
  }

  render() {
    const { participantsQuery } = this.props
    if (!participantsQuery || participantsQuery.loading) return null
    const { participants } = participantsQuery

    return (
      <View style={styles.container}>
        <Button onPress={this._navigateToOrganizationForm} title="Create new organization" />
        <Text style={styles.text}>Your organizations:</Text>
        <ScrollView>
          {participants.map(({ organization }) => (
            <Button key={organization._id} style={styles.organization} title={organization.name} />
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
  organization: {
    marginTop: 10,
    width: 300,
  },
})

const mapStateToProps = ({ currentUser }) => ({
  id: currentUser._id,
})

export default compose(
  connect(mapStateToProps),
  graphql(participantsQuery, {
    name: 'participantsQuery',
    options: ({ id }) => ({
      skip: !id,
      variables: { id },
    }),
  })
)(UserProfile)
