import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Main from '../'

describe('<Main />', () => {
  const wrapper = renderer.create(<Main />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
