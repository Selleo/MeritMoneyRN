import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import StarRating from '../StarRating'

describe('<StarRating />', () => {
  const defaultProps = {
    quantity: 1,
    setQuantity: jest.fn(),
  }

  const wrapper = renderer.create(<StarRating {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
