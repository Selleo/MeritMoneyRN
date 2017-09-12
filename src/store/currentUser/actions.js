import { types } from './'

export const setCurrentUser = (currentUser) => ({
  type: types.SET_CURRENT_USER,
  payload: currentUser
})
