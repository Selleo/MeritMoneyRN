import { createSwitchNavigator } from 'react-navigation'

import Loading from 'src/scenes/Loading'
import MainTab from './MainTab'
import LoginStack from './LoginStack'

export default createSwitchNavigator(
  {
    Loading: Loading,
    App: MainTab,
    Login: LoginStack,
  },
  {
    initialRouteName: 'Loading',
  },
)
