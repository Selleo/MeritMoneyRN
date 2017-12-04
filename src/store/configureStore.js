import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import currentUser from './currentUser'
import participants from './participants'
import comments from './comments'
import currentTab from './currentTab'

const isDevelopment = process.env.NODE_ENV === 'development'
const composeEnhancers = isDevelopment ? composeWithDevTools : compose

const reducers = combineReducers({
  currentUser,
  comments,
  participants,
  currentTab,
})

export default createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
