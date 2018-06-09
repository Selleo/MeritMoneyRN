import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import TextGradient from '../TextGradient'

describe('<TextGradient />', () => {
  const defaultProps = {
    children: 'test text',
    style: {},
  }

  const wrapper = renderer.create(<TextGradient {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
