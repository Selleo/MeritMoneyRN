import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import { PRIMARY_COLOR } from '../utils/variables'
import Comments from './Comments'
import CollectorsAndHamsters from './CollectorsAndHamsters'
import Users from './Users'
import UserProfile from './UserProfile'
import { actions } from '../store/currentTab'

/* eslint-disable */
export const Scenes = {
  Users: {
    screen: Users,
    navigationOptions: {
      tabBarLabel: 'Users',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="people" />,
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      tabBarLabel: 'Comments',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="comment" />,
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarLabel: 'Collectors & Hamsters',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="show-chart" />,
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'UserProfile',
      tabBarIcon: ({ tintColor }) => <Icon iconStyle={{ color: tintColor }} name="perm-identity" />,
    },
  },
}
/* eslint-enable */

export const TabNavigatorConfig = {
  initialRouteName: 'UserProfile',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: PRIMARY_COLOR,
    showIcon: true,
  },
}

export class App extends PureComponent {
  static propTypes = {
    setCurrentTab: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { navigation } = this.props
    const Navigator = TabNavigator(Scenes, TabNavigatorConfig)

    return (
      <Navigator
        onNavigationStateChange={this.props.setCurrentTab}
        screenProps={{ rootNavigation: navigation }}
      />
    )
  }
}

const mapDispatchToProps = {
  setCurrentTab: actions.setCurrentTab,
}

export default connect(null, mapDispatchToProps)(App)
