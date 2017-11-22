import { types } from './'

const user = {
  name: 'John Doe',
  avatar: 'https://www.wykop.pl/cdn/c3201142/comment_lD8RanwxW9vxI4DNHXjEB2LLFh7wmnYk.jpg',
  givenKudos: 5,
}

const setUsers = users => ({
  type: types.SET_USERS,
  payload: users,
})

export const getUsers = () => dispatch => dispatch(setUsers([user]))
