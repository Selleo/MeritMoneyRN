import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements'
import { compose, graphql } from 'react-apollo'
import { createOrganizationMutation } from '../../graphql/mutations'

export class OrganizationForm extends Component {
  static propTypes = {
    createOrganization: PropTypes.func.isRequired,
  }

  state = {}

  _onChange = (key, value) => this.setState({ [key]: value })

  _onSubmit = () => {
    const { name } = this.state

    if (name) {
      this.props.createOrganization({ variables: { name } })
    } else {
      this.setState({ error: true })
      this.nameInput.shake()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <FormLabel>Name</FormLabel>
          <FormInput
            onChangeText={value => this._onChange('name', value)}
            ref={ref => (this.nameInput = ref)}
          />
          <FormValidationMessage>
            {this.state.error && <Text>Name cannot be blank</Text>}
          </FormValidationMessage>
        </View>

        <Button onPress={this._onSubmit} title="Create Organization" />
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
  form: {
    width: '90%',
  },
})

export default compose(graphql(createOrganizationMutation, { name: 'createOrganization' }))(
  OrganizationForm,
)
