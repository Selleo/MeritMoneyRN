import React, { Component } from 'react'
import { LinearTextGradient } from 'react-native-text-gradient'

import { secondaryLight, primary } from 'src/styles/colors'

export default class TextGradient extends Component {
  render() {
    const { style, children } = this.props

    return (
      <LinearTextGradient
        colors={[secondaryLight, primary]}
        end={{ x: 1, y: 0 }}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        style={style}
      >
        {children}
      </LinearTextGradient>
    )
  }
}
