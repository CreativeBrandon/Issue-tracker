import { PostActions } from '../../../actions'
import { EntitiesPost, Post } from '../../../models'
import { ADD_POST, UPDATE_POST } from '../../../constants'
import { addId, addByIds } from '../../reducer-utils'

const initialState: EntitiesPost = {
    allIds: [],
    byIds: {}
}

const update = (byIds: {}, payload: Post): {} => {

    const currentItem = byIds[payload.id]

    return {
        ...byIds,
        [payload.id]: {
            ...currentItem,
            title: payload.title,
            description: payload.description,
            status: payload.status
        }
    }
}

export const posts = (state: EntitiesPost = initialState, action: PostActions): EntitiesPost => {
    const { type, payload } = action

    switch (type) {
        case ADD_POST:
            return {
                ...state,
                allIds: addId(state.allIds, payload),
                byIds: addByIds(state.byIds, payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                byIds: update(state.byIds, payload)
            }
        default:
            return state
    }
}
