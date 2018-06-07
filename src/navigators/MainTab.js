import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import LinearGradient from 'react-native-linear-gradient'

import Header from 'src/components/Header'
import Icon from 'src/components/Icon'
import KudoBoard from 'src/scenes/KudoBoard'
import Profile from 'src/scenes/Profile'
import Comments from 'src/scenes/Comments'
import CollectorsAndHamsters from 'src/scenes/CollectorsAndHamsters'
import { secondary, secondaryLight, primary, blueLight, blueDark } from 'src/styles/colors'
import { defaultTabBarHeight } from 'src/styles/variables'

/* eslint-disable */
const Scenes = {
  KudoBoard: {
    screen: KudoBoard,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="home2" size={25} />,
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="bubble-text" size={25} />,
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="trophy" size={25} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="user" size={25} />,
    },
  },
}
/* eslint-enable */

const TabBarComponent = props => (
  <LinearGradient
    colors={[secondary, secondaryLight]}
    locations={[0, 1]}
    style={styles.linearGradient}
  >
    <BottomTabBar {...props} style={styles.tabBar} />
  </LinearGradient>
)

const config = {
  animationEnabled: true,
  tabBarComponent: TabBarComponent,
  tabBarOptions: {
    allowFontScaling: false,
    activeTintColor: primary,
    inactiveTintColor: blueLight,
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

const TabBarNavigation = createBottomTabNavigator(Scenes, config)

export default createStackNavigator(
  {
    Main: {
      screen: TabBarNavigation,
      navigationOptions: {
        header: <Header />,
      },
    },
  },
  {
    cardStyle: {
      backgroundColor: blueDark,
    },
  },
)
