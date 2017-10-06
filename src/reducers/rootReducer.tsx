import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import rootUiReducer from './ui/rootUiReducer'
import * as reducers from '../reducers'

const rootReducer = combineReducers({
    ...reducers,
    ui: rootUiReducer,
    form: formReducer,
   routing: routerReducer
})

export default rootReducer
