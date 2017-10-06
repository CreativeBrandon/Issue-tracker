export interface Notification {
    id: number
    postId?: number
    message: string
    read: boolean
    isDeleted: boolean 
}

export interface NotificationsById {
    [index: number]: Notification
}

export interface UiNotificationsState {
    isVisible: boolean
}

export interface NotificationsState {
    ids: number[]
    byIds: NotificationsById
}
