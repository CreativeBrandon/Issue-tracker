import { combineReducers } from 'redux'
import * as reducers from './'

const rootEntitiesReducer = combineReducers({
    ...reducers
})

export default rootEntitiesReducer