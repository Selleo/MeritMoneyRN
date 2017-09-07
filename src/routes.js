import React from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Comments from './Comments';
import CollectorsAndHamsters from './CollectorsAndHamsters';
import Main from './Main';

const RoutesConfig = {
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: () => <Icon name='home'/>
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      tabBarLabel: 'Comments',
      tabBarIcon: () => <Icon name='comment'/>
    },
  },
  CollectorsAndHamsters: {
    screen: CollectorsAndHamsters,
    navigationOptions: {
      tabBarLabel: 'Collectors & Hamsters',
      tabBarIcon: () => <Icon name='supervisor-account'/>
    },
  },
};

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  initialRoute: 'Main',
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    },
  },
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  }
});

export default TabNavigator(RoutesConfig, TabNavigatorConfig);


