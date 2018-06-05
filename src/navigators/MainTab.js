import { createBottomTabNavigator } from 'react-navigation'

import Users from 'src/scenes/Users'
import Profile from 'src/scenes/Profile'
import Comments from 'src/scenes/Comments'
import CollectorsAndHamsters from 'src/scenes/CollectorsAndHamsters'

const Scenes = {
  Users,
  Profile,
  Comments,
  CollectorsAndHamsters,
}

const config = {}

export default createBottomTabNavigator(Scenes, config)
