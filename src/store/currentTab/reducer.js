import { SET_CURRENT_TAB } from './constants'

export default (initialState = '', action) => {
  switch(action.type) {
  case SET_CURRENT_TAB: return action.payload
  default: return initialState
  }
}
