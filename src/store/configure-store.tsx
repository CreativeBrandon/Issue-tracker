import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { loadState, saveState } from '../localstorage'
import rootReducer from '../reducers/rootReducer'

export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Now you can dispatch navigation actions from anywhere! store.dispatch(push('/foo'))
const presistedState = loadState()

export const store = createStore(
    rootReducer,
    presistedState,
    applyMiddleware(middleware)
)

store.subscribe(() => {
    saveState(store.getState())
})
