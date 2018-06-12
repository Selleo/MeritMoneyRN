import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BottomTabBar } from 'react-navigation-tabs'

import { secondary, secondaryLight } from 'src/styles/colors'
import { defaultTabBarHeight } from 'src/styles/variables'

const TabBar = props => (
  <LinearGradient
    colors={[secondary, secondaryLight]}
    locations={[0, 1]}
    style={styles.linearGradient}
  >
    <BottomTabBar {...props} style={styles.tabBar} />
  </LinearGradient>
)

export default TabBar

const styles = StyleSheet.create({
  linearGradient: {
    height: defaultTabBarHeight,
    zIndex: 1,
  },
  tabBar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
})
