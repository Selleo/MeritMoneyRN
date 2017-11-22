import { types } from './'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
  case types.LOAD_COMMENTS:
    return action.payload

  default:
    return state
  }
}
