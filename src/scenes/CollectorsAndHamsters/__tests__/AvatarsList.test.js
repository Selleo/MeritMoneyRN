import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import AvatarsList from '../AvatarsList'

describe('<AvatarsList />', () => {
  const wrapper = renderer.create(<AvatarsList />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
