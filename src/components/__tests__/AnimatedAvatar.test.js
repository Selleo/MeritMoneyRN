import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { AnimatedAvatar } from '../AnimatedAvatar'

describe('<AnimatedAvatar />', () => {
  const defaultProps = {
    avatarAnimationValue: 1,
  }

  const wrapper = renderer.create(<AnimatedAvatar {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidUpdate', () => {
    test('should call animate if animation value has changed', () => {
      const wrapper = renderer.create(<AnimatedAvatar {...defaultProps} />)
      const instance = wrapper.getInstance()
      instance.animate = jest.fn()
      wrapper.update(<AnimatedAvatar avatarAnimationValue={0} />)
      expect(instance.animate).toHaveBeenCalled()
    })

    test('should not call animate if animation value has not changed', () => {
      const wrapper = renderer.create(<AnimatedAvatar {...defaultProps} />)
      const instance = wrapper.getInstance()
      instance.animate = jest.fn()
      wrapper.update(<AnimatedAvatar avatarAnimationValue={1} />)
      expect(instance.animate).not.toHaveBeenCalled()
    })
  })

  describe('animate', () => {
    test('should change animation value', () => {
      const instance = wrapper.getInstance()
      instance.state.visible = true
      instance.animate(true)
      expect(instance.state.visible).toBe(false)
    })
  })
})
