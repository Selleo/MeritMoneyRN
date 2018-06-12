import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import KudoBoardComponent, { KudoBoard } from '../index'

describe('<KudoBoard />', () => {
  const defaultProps = {
    navigation: {
      addListener: jest.fn(() => ({
        remove: jest.fn(),
      })),
    },
    setAvatarAnimationValue: jest.fn(),
    avatarAnimationValue: 0,
  }

  const wrapper = renderer.create(<KudoBoardComponent {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentWillUnmount', () => {
    test('should remove listener', () => {
      const wrapper = renderer.create(<KudoBoardComponent {...defaultProps} />)
      const instance = wrapper.root.findByType(KudoBoard)._fiber.stateNode
      wrapper.unmount()
      expect(instance._navListener.remove).toHaveBeenCalled()
    })
  })

  describe('_animateAvatar', () => {
    test('should call setAvatarAnimationValue if is different than current', () => {
      const instance = wrapper.root.findByType(KudoBoard)._fiber.stateNode
      instance._animateAvatar({ nativeEvent: { contentOffset: { y: 10 } } })
      expect(instance.props.setAvatarAnimationValue).toHaveBeenCalledWith(1)
    })

    test('should not call setAvatarAnimationValue if animationValue is equal props', () => {
      const wrapper = renderer.create(
        <KudoBoardComponent {...defaultProps} setAvatarAnimationValue={jest.fn()} />,
      )
      const instance = wrapper.root.findByType(KudoBoard)._fiber.stateNode
      instance._animateAvatar({ nativeEvent: { contentOffset: { y: 30 } } })
      expect(instance.props.setAvatarAnimationValue).not.toBeCalled()
    })
  })

  describe('_handleSearch', () => {
    test('should change name value', () => {
      const instance = wrapper.root.findByType(KudoBoard)._fiber.stateNode
      instance._handleSearch('User Name')
      expect(instance.state.name).toBe('User Name')
    })
  })
})
