import React from 'react'
import { StackNavigator } from 'react-navigation'

import Login from './scenes/Login'
import AppContainer from './AppContainer'
import TopBar from './components/TopBar'
import OrganizationForm from './scenes/Organization/OrganizationForm'

const MainScenes = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: AppContainer,
    navigationOptions: { header: <TopBar /> },
  },
  OrganizationForm: { screen: OrganizationForm },
}

const createStackNavigator = idToken =>
  StackNavigator(MainScenes, { initialRouteName: idToken ? 'Main' : 'Login' })

export default createStackNavigator
