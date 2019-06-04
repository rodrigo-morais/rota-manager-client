import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  middleware.push(promiseMiddleware())
  middleware.push(reduxThunk)

  enhancers.push(applyMiddleware(...middleware))
  middleware.unshift(reduxLogger())
  const composed = composeWithDevTools(...enhancers)
  return createStore(rootReducer, composed)
}
