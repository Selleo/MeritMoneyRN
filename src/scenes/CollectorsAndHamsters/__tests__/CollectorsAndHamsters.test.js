import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import CollectorsAndHamsters from '../'

describe('<CollectorsAndHamsters />', () => {
  const wrapper = renderer.create(<CollectorsAndHamsters />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('_selected', () => {
    test('should return selected state', () => {
      const instance = wrapper.getInstance()
      instance.state.type = 'collectors'
      expect(instance._selected('collectors')).toBe(false)
      expect(instance._selected('hamsters')).toBe(true)
    })
  })

  describe('_selectFilter', () => {
    test('should change selected state', () => {
      const instance = wrapper.getInstance()
      instance.state.type = 'collectors'
      instance._selectFilter('hamsters')()
      expect(instance.state.type).toBe('hamsters')
    })
  })
})
