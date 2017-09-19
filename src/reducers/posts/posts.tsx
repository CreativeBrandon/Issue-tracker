import { AddPost, ReceivedPosts } from '../../actions';
import { Post, EntitiesPost } from '../../models';
import { ADD_POST, RECEIVE_POSTS } from '../../constants';

const post = (state: Post, action: AddPost) => {
    const { type, payload } = action
    switch (type) {
        case ADD_POST:
            return payload
        default:
            return state
    }
}

const byIds = (state: object = {}, action: AddPost) => {
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

const allIds = (state: number[] = [], action: AddPost) => {
    const { type, payload } = action
    switch (type) {
        case ADD_POST:
            return [...state, payload.id]
        default:
            return state
    }
}

export const addPost = (state: EntitiesPost, action: AddPost) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                allIds: allIds(state.allIds, action),
                byIds: byIds(state.byIds, action)
            }
        // return [...state, action.payload]
        default:
            return state
    }
}

export const addPostbyId = (state: Post[] = [], action: AddPost) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload]
        default:
            return state
    }
}

export const receivedPosts = (state: Post[] = [], action: ReceivedPosts) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload
        default:
            return state
    }
}
