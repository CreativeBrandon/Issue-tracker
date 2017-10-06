import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import rootEntitiesReducer from './entities/rootEntitiesReducer'
import rootUiReducer from './ui/rootUiReducer'

const rootReducer = combineReducers({
    ui: rootUiReducer,
    entities: rootEntitiesReducer,
    form: formReducer,
    routing: routerReducer
})

export default rootReducer
