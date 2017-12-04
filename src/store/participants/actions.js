import { types } from './'

export const setParticipants = participants => ({
  type: types.SET_PARTICIPANTS,
  payload: participants,
})

export const setCurrentParticipant = id => ({
  type: types.SET_CURRENT_PARTICIPANT,
  payload: id,
})
