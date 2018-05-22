import { types } from './'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return action.payload

    default:
      return state
  }
}
