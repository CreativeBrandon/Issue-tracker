import * as constants from '../constants'
import { FSAction } from './fsaction'

export interface ShowNotifications extends FSAction {
    type: constants.SHOW_NOTIFICATIONS
    payload: boolean
}

export function showNotifications(payload: boolean): ShowNotifications {
    return {
        type: constants.SHOW_NOTIFICATIONS,
        payload: payload
    }
}

export interface HideNotifications extends FSAction {
    type: constants.HIDE_NOTIFICATIONS
    payload: boolean
}

export function hideNotifications(payload: boolean): HideNotifications {
    return {
        type: constants.HIDE_NOTIFICATIONS,
        payload: payload
    }
}

export type UiNotificationsActions = ShowNotifications | HideNotifications
