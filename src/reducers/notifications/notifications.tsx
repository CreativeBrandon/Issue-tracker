import { NotificationActions } from '../../actions'
import { Notification, NotificationsState } from '../../models'
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../../constants'

const initState: NotificationsState = {
    ids: [],
    byIds: {}
}

const addId = (ids: number[], payload: Notification): number[] => {
    return [
        ...ids,
        payload.id
    ]
}

const addByIds = (byIds: {}, payload: Notification): {} => {
    return {
        ...byIds,
        [payload.id]: payload
    }
}

const removeByIds = (byIds: {}, payload: Notification): {} => {

    const currentItem = byIds[payload.id]

    return {
        ...byIds,
        [payload.id]: {
            ...currentItem,
            isDeleted: true
        }
    }
}

export const notifications = (state: NotificationsState = initState, action: NotificationActions): NotificationsState => {
    const { type, payload } = action

    switch (type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                ids: addId(state.ids, payload),
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
