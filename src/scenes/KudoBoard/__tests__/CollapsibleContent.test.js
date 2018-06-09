import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import CollapsibleContent from '../CollapsibleContent'

describe('<CollapsibleContent />', () => {
  const defaultProps = {
    closeCollapsible: jest.fn(),
  }

  const wrapper = renderer.create(<CollapsibleContent {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleTextChange', () => {
    test('should update comment state', () => {
      const instance = wrapper.getInstance()
      instance._handleTextChange()('test comment')
      expect(instance.state.comment).toEqual('test comment')
    })
  })

  describe('_handleQuantityChange', () => {
    test('should update kudos quantity', () => {
      const instance = wrapper.getInstance()
      instance._handleQuantityChange(5)()
    })
  })
})
