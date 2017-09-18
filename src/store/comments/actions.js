import { types } from './'

export const loadComments = (comments) => ({
  type: types.LOAD_COMMENTS,
  payload: comments
})
