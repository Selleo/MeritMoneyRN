import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import LinearGradient from 'react-native-linear-gradient'

import Users from 'src/scenes/Users'
import Profile from 'src/scenes/Profile'
import Comments from 'src/scenes/Comments'
import CollectorsAndHamsters from 'src/scenes/CollectorsAndHamsters'
import images from 'src/assets/images'
import { tab, secondary } from 'src/styles/colors'
import { defaultTabBarHeight } from 'src/styles/variables'

const Scenes = {
  Users: {
    screen: Users,
    navigationOptions: {
      tabBarIcon: <Image source={images.home} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: <Image source={images.user} />,
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      tabBarIcon: <Image source={images.bubbleText} />,
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarIcon: <Image source={images.trophy} />,
    },
  },
}

const TabBarComponent = props => (
  <LinearGradient colors={[tab, secondary]} locations={[0.8, 1]} style={styles.linearGradient}>
    <BottomTabBar {...props} style={styles.tabBar} />
  </LinearGradient>
)

const config = {
  tabBarComponent: TabBarComponent,
  tabBarOptions: {
    showLabel: false,
  },
}

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

export default createBottomTabNavigator(Scenes, config)
