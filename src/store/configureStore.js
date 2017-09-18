import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunkMiddleware from 'redux-thunk'

import currentUser from './currentUser'
import users from './users'
import comments from './comments'

const isDevelopment = process.env.NODE_ENV === 'development'
const composeEnhancers = isDevelopment
  ? composeWithDevTools({ realtime: true })
  : compose

const reducers = combineReducers({
  currentUser,
  comments,
  users,
})

export default createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)
