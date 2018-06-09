import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import Icon from 'src/components/Icon'
import { yellow } from 'src/styles/colors'

export default class StarRating extends Component {
  static propTypes = {
    quantity: PropTypes.number.isRequired,
    setQuantity: PropTypes.func.isRequired,
  }

  _setKudoAmount = kudoAmount => () => this.setState({ kudoAmount })

  renderStarts = () => {
    const { quantity, setQuantity } = this.props
    const stars = []

    for (let i = 1; i < 6; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={setQuantity(i)}>
          <Icon
            color={yellow}
            name={quantity >= i ? 'star-full2' : 'star-empty3'}
            size={28}
            style={styles.kudo}
          />
        </TouchableOpacity>,
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
  kudo: {
    paddingHorizontal: 8,
  },
})
