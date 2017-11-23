import { types } from './'
import store from '../configureStore'

export const setCurrentTab = (prevState, currentState) => {
  const currentScreen = getCurrentRouteName(currentState)
  store.dispatch({ type: types.SET_CURRENT_TAB , payload: currentScreen })
}

const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

