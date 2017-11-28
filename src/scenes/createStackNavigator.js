import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import { PRIMARY_COLOR } from '../utils/variables'
import UserProfile from './UserProfile'
import CollectorsAndHamsters from './CollectorsAndHamsters'
import Login from './Login'
import Users from './Users'
import OrganizationForm from './Organization/OrganizationForm'
import TopBar from '../components/TopBar'

const Scenes = {
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

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: PRIMARY_COLOR,
    showIcon: true,
  },
}

const MainScenes = {
  Login: { screen: Login },
  OrganizationForm: { screen: OrganizationForm },
  Main: { screen: TabNavigator(Scenes, TabNavigatorConfig) },
}

const createStackNavigator = idToken =>
  StackNavigator(MainScenes, {
    initialRouteName: idToken ? 'Main' : 'Login',
    navigationOptions: {
      header: props => <TopBar currentUser={props.currentUser} />,
    },
  })

export default createStackNavigator
