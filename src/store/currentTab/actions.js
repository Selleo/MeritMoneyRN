import { types } from './'

export const setCurrentTab = (prevState, currentState) => dispatch => {
  const currentScreen = getCurrentRouteName(currentState)
  return dispatch({ type: types.SET_CURRENT_TAB, payload: currentScreen })
}

const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}
