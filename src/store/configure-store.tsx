import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { loadState } from './localstorage'
import rootReducer from '../reducers/rootReducer'

export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Now you can dispatch navigation actions from anywhere! store.dispatch(push('/foo'))
const presistedState = loadState()
// const recoverState = (): RootState => ({} as RootState);

export const store = createStore(
    rootReducer,
    presistedState,
    applyMiddleware(middleware, thunk, logger)
)

store.subscribe(() => {
   // saveState(store.getState())
})
