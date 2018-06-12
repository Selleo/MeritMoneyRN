import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Header from 'src/components/Header'
import Icon from 'src/components/Icon'
import KudoBoard from 'src/scenes/KudoBoard'
import Profile from 'src/scenes/Profile'
import Comments from 'src/scenes/Comments'
import CollectorsAndHamsters from 'src/scenes/CollectorsAndHamsters'
import { blueDark } from 'src/styles/colors'
import config from './tabBarConfig'

/* eslint-disable */
const Scenes = {
  KudoBoard: {
    screen: KudoBoard,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="home" size={25} />,
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
