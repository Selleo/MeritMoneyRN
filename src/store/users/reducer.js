import { types } from './'

const initialState = [

]

export default (state = initialState, action) => {
  switch (action.type) {

  case types.SET_USERS:
    return [...state, ...action.payload]

  default:
    return state
  }
}
