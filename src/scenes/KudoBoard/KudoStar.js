import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'src/components/Icon'
import { yellow } from 'src/styles/colors'

export default class KudoStar extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isChecked: PropTypes.bool.isRequired,
    setKudoAmount: PropTypes.func.isRequired,
  }

  render() {
    const { isChecked, index, setKudoAmount } = this.props
    const name = isChecked ? 'star-full2' : 'star-empty3'
    return (
      <TouchableOpacity onPress={setKudoAmount(index)}>
        <Icon color={yellow} name={name} size={28} style={styles.kudo} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  kudo: {
    paddingHorizontal: 8,
  },
})
