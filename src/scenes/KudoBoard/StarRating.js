import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import KudoStar from './KudoStar'

export default class StarRating extends Component {
  static propTypes = {
    kudoAmount: PropTypes.number.isRequired,
    setKudoAmount: PropTypes.func.isRequired,
  }

  renderStarts = () => {
    const { kudoAmount, setKudoAmount } = this.props
    const stars = []
    for (let i = 1; i < 6; i++) {
      stars.push(
        <KudoStar
          index={i}
          isChecked={kudoAmount >= i}
          key={`kudo-${i}`}
          setKudoAmount={setKudoAmount}
        />,
      )
    }
    return stars
  }
  render() {
    return <View style={styles.container}>{this.renderStarts()}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
})
