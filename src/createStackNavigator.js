import React from 'react'
import { StackNavigator } from 'react-navigation'

import Login from './scenes/Login'
import OrganizationForm from './scenes/Organization/OrganizationForm'
import AppContainer from './AppContainer'
import TopBar from './components/TopBar'

const MainScenes = {
  Login: { screen: Login },
  Main: { screen: AppContainer },
  OrganizationForm: { screen: OrganizationForm },
}

const createStackNavigator = idToken =>
  StackNavigator(MainScenes, {
    initialRouteName: idToken ? 'Main' : 'Login',
    navigationOptions: {
      header: <TopBar />,
    },
  })

export default createStackNavigator
