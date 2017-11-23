import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation'

import { PRIMARY_COLOR } from '../utils/variables'
import Comments from './Comments'
import CollectorsAndHamsters from './CollectorsAndHamsters'
import Users from './Users'
import UserProfile from './UserProfile'
import { actions } from '../store/currentTab'

export const Scenes = {
  Users: {
    screen: Users,
    navigationOptions: {
      tabBarLabel: 'Users',
      tabBarIcon: ({ tintColor }) => (
        <Icon iconStyle={{ color: tintColor }} name="people" />
      ),
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      tabBarLabel: 'Comments',
      tabBarIcon: ({ tintColor }) => (
        <Icon iconStyle={{ color: tintColor }} name="comment" />
      ),
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarLabel: 'Collectors & Hamsters',
      tabBarIcon: ({ tintColor }) => (
        <Icon iconStyle={{ color: tintColor }} name="show-chart" />
      ),
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'UserProfile',
      tabBarIcon: ({ tintColor }) => (
        <Icon iconStyle={{ color: tintColor }} name="perm-identity" />
      ),
    },
  },
}

export const TabNavigatorConfig = {
  initialRouteName: 'UserProfile',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: PRIMARY_COLOR,
    showIcon: true,
  },
}

export default class App extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { navigation } = this.props
    const Navigator = TabNavigator(Scenes, TabNavigatorConfig)
    return (
      <Navigator
        onNavigationStateChange={actions.setCurrentTab}
        screenProps={{ rootNavigation: navigation }}
      />
    )
  }
}
