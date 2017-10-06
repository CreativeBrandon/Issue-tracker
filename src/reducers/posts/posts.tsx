import { AddPost, ReceivedPosts, UpdatePost } from '../../actions';
import { Post, PostsByIds, EntitiesPost } from '../../models';
import { ADD_POST, RECEIVE_POSTS, UPDATE_POST } from '../../constants';

const post = (state: Post, action: AddPost): Post => {
    const { type, payload } = action
    switch (type) {
        case ADD_POST:
            return payload
        default:
            return state
    }
}

const byIds = (state: PostsByIds = {}, action: AddPost): PostsByIds => {
    const { type, payload } = action

    switch (type) {
        case ADD_POST:
            return {
                ...state,
                [payload.id]: post(state[payload.id], action)
            }
        default:
            return state
    }
}

const allIds = (state: number[] = [], action: AddPost): number[] => {
    const { type, payload } = action
    switch (type) {
        case ADD_POST:
            return [...state, payload.id]
        default:
            return state
    }
}

export const addPost = (state: EntitiesPost, action: AddPost): EntitiesPost => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                allIds: allIds(state.allIds, action),
                byIds: byIds(state.byIds, action)
            }
        default:
            return state
    }
}

export const addPostbyId = (state: Post[] = [], action: AddPost): Post[] => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload]
        default:
            return state
    }
}

export const receivedPosts = (state: Post[] = [], action: ReceivedPosts): Post[] => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload
        default:
            return state
    }
}

export const updatePost = (state: {}, action: UpdatePost): {} => {
    const { type, payload} = action

    switch (type) {
        case UPDATE_POST:
            const currentPost = state[payload.id]
            return {
                ...state,
                [payload.id]: {
                    ...currentPost,
                    title: payload.title,
                    description: payload.description,
                    status: payload.status
                }
            }
        default:
            return state
    }
}
