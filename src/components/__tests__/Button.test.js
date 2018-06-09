import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../Button'

describe('<Button />', () => {
  const defaultProps = {
    text: 'Click me',
    outline: false,
    onPress: jest.fn(),
  }

  const wrapper = renderer.create(<Button {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
