import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../Header'

describe('<Header />', () => {
  const defaultProps = {}

  const wrapper = renderer.create(<Header {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
