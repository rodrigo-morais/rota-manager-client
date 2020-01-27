import {combineReducers} from 'redux'
import createStore from './createStore'
import shiftsReducer from './shiftsReducer'
import invitedContractsReducer from './invitedContractsReducer'


const catapultReducer = combineReducers({
  shifts: shiftsReducer,
  invitedContracts: invitedContractsReducer,
})

export default createStore(catapultReducer)
