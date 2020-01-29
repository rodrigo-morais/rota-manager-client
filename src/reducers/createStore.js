import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reduxLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  middleware.push(promiseMiddleware)
  middleware.push(thunkMiddleware)
  middleware.push(reduxLogger)

  enhancers.push(applyMiddleware(...middleware))
  const composed = composeWithDevTools(...enhancers)
  return createStore(rootReducer, composed)
}
