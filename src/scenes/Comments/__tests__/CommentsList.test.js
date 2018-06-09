import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import CommentsList from '../CommentsList'

describe('<CommentsList />', () => {
  const wrapper = renderer.create(<CommentsList />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
