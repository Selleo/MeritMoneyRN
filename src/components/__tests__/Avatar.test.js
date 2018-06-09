import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../Avatar'

describe('<Avatar />', () => {
  const defaultProps = {
    size: 50,
    source: 'https://i.imgur.com/ckqCXMS.png',
  }

  const wrapper = renderer.create(<Avatar {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
