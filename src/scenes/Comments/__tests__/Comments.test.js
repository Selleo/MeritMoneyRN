import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import CommentsComponent, { Comments } from '../index'

describe('<Comments />', () => {
  const defaultProps = {
    navigation: {
      addListener: jest.fn(() => ({
        remove: jest.fn(),
      })),
    },
    setAvatarAnimationValue: jest.fn(),
    avatarAnimationValue: 0,
  }

  const wrapper = renderer.create(<CommentsComponent {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentWillUnmount', () => {
    test('should remove listener', () => {
      const wrapper = renderer.create(<CommentsComponent {...defaultProps} />)
      const instance = wrapper.root.findByType(Comments)._fiber.stateNode
      wrapper.unmount()
      expect(instance._navListener.remove).toHaveBeenCalled()
    })
  })

  describe('_selected', () => {
    test('should return selected state', () => {
      const instance = wrapper.root.findByType(Comments)._fiber.stateNode
      instance.state.type = 'yours'
      expect(instance._selected('yours')).toBe(false)
      expect(instance._selected('all')).toBe(true)
    })
  })

  describe('_selectFilter', () => {
    test('should change selected state', () => {
      const instance = wrapper.root.findByType(Comments)._fiber.stateNode
      instance.state.type = 'yours'
      instance._selectFilter('all')()
      expect(instance.state.type).toBe('all')
    })
  })

  describe('_animateAvatar', () => {
    test('should call setAvatarAnimationValue if is different than current', () => {
      const instance = wrapper.root.findByType(Comments)._fiber.stateNode
      instance._animateAvatar({ nativeEvent: { contentOffset: { y: 10 } } })
      expect(instance.props.setAvatarAnimationValue).toHaveBeenCalledWith(1)
    })
  })
})
