import { primary, blueLight } from 'src/styles/colors'
import TabBar from './TabBar'

export default {
  animationEnabled: true,
  tabBarComponent: TabBar,
  tabBarOptions: {
    allowFontScaling: false,
    activeTintColor: primary,
    inactiveTintColor: blueLight,
    showLabel: false,
  },
}
