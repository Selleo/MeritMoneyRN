import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import CommentInput from '../CommentInput'

describe('<CommentInput />', () => {
  const defaultProps = {
    handleChange: jest.fn(),
  }

  const wrapper = renderer.create(<CommentInput {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
