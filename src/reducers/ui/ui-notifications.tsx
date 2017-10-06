import { UiNotificationsState } from '../../models'
import { UiNotificationsActions } from '../../actions'
import { SHOW_NOTIFICATIONS, HIDE_NOTIFICATIONS } from '../../constants'

const initialState: UiNotificationsState = {
    isVisible: false
}

export const uiNotifications = (state: UiNotificationsState = initialState, action: UiNotificationsActions): UiNotificationsState => {
    const { type, payload } = action

    switch (type) {
        case SHOW_NOTIFICATIONS:
        case HIDE_NOTIFICATIONS:
            return {
                ...state,
                isVisible: payload
            }
        default:
            return state
    }
}
