import { Notification, Post } from '../models'

type Payload = Notification | Post

export const addId = (ids: number[], payload: Payload): number[] => {
    return [
        ...ids,
        payload.id
    ]
}

export const addByIds = (byIds: {}, payload: Payload): {} => {
    return {
        ...byIds,
        [payload.id]: payload
    }
}

export const removeByIds = (byIds: {}, payload: Payload): {} => {

    const currentItem = byIds[payload.id]

    return {
        ...byIds,
        [payload.id]: {
            ...currentItem,
            isDeleted: true
        }
    }
}
