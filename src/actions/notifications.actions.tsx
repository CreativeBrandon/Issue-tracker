import * as constants from '../constants'
import { Notification } from '../models'
import { FSAction } from './fsaction'

export interface AddNotification extends FSAction {
    type: constants.ADD_NOTIFICATION
    payload: Notification
}

export function addNotification(notification: Notification): AddNotification {
    return {
        type: constants.ADD_NOTIFICATION,
        payload: notification
    }
}

export interface RemoveNotification extends FSAction {
    type: constants.REMOVE_NOTIFICATION
    payload: Notification
}

export function removeNotification(notification: Notification): RemoveNotification {
    return {
        type: constants.REMOVE_NOTIFICATION,
        payload: notification
    }
}

export type NotificationActions = AddNotification |  RemoveNotification 
