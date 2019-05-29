import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import createStore from './createStore'
import shiftsReducer from './shiftsReducer'


const catapultReducer = combineReducers({
  shifts:  shiftsReducer,
  routing: routerReducer
})

export default createStore(catapultReducer)
