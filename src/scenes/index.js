import React from 'react'
import { Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation'

import { PRIMARY_COLOR } from '../utils/variables'
import UserProfile from './UserProfile'
import CollectorsAndHamsters from './CollectorsAndHamsters'
import Users from './Users'

export const Scenes = {
  Users: {
    screen: Users,
    navigationOptions: {
      tabBarLabel: 'Users',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="people" />,
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'UserProfile',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="perm-identity" />,
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarLabel: 'Collectors & Hamsters',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="show-chart" />,
    },
  },
}

export const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: PRIMARY_COLOR,
    showIcon: true,
  },
}

export default TabNavigator(Scenes, TabNavigatorConfig)
