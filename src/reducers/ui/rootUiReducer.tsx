import { combineReducers } from 'redux'
import { uiNotifications } from './ui-notifications'

const rootUiReducer = combineReducers({
    notifications: uiNotifications
})

export default rootUiReducer