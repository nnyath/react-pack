import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import reducer from 'Reducers/combinedReducers'

const middleware = applyMiddleware(promiseMiddleware(), thunk)

export default createStore(reducer, middleware)
