import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import currentUser from './currentUser'
import users from './users'
import comments from './comments'
import currentTab from './currentTab/reducer'

const isDevelopment = process.env.NODE_ENV === 'development'
const composeEnhancers = isDevelopment ? composeWithDevTools : compose

const reducers = combineReducers({
  currentUser,
  comments,
  users,
  currentTab,
})

export default createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
