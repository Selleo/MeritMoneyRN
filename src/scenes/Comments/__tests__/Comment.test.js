import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Comment from '../Comment'

describe('<Comment />', () => {
  const wrapper = renderer.create(<Comment />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
