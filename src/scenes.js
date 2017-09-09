import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Comments from './Comments'
import CollectorsAndHamsters from './CollectorsAndHamsters'
import Main from './Main'
import TopBar from './TopBar'

const ScenesConfig = {
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' iconStyle={{color: tintColor}}/>
      )
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      tabBarLabel: 'Comments',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='comment' iconStyle={{color: tintColor}}/>
      )
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarLabel: 'Collectors & Hamsters',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='supervisor-account' iconStyle={{color: tintColor}}/>
      )
    },
  },
}

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  initialRoute: 'Main',
  tabBarOptions: {
    showIcon: true,
  },
}

const HeaderConfig = {
  Main: {
    screen: TabNavigator(ScenesConfig, TabNavigatorConfig),
    navigationOptions: {
      header: <TopBar />
    },
  },
}

export default StackNavigator(HeaderConfig)
