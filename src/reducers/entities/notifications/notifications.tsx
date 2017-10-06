import { NotificationActions } from '../../../actions'
import { NotificationsState } from '../../../models'
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../../../constants'
import { addId, addByIds, removeByIds} from '../../reducer-utils'

const initState: NotificationsState = {
    allIds: [],
    byIds: {}
}

export const notifications = (state: NotificationsState = initState, action: NotificationActions): NotificationsState => {
    const { type, payload } = action

    switch (type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                allIds: addId(state.allIds, payload),
                byIds: addByIds(state.byIds, payload)
            }
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                byIds: removeByIds(state.byIds, payload)
            }
        default:
            return state
    }
}
