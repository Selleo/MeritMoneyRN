import { types } from './'

const initialState = {
  currentParticipant: {},
  participants: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case types.SET_PARTICIPANTS:
    return { ...state, participants: payload }

  case types.SET_CURRENT_PARTICIPANT:
    return { ...state, currentParticipant: state.participants.find(({ _id }) => _id === payload) }

  default:
    return state
  }
}
