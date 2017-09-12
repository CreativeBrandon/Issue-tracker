import { AddPost, ReceivePosts } from '../actions'
import { Entities } from '../models'
import { ADD_POST, RECEIVE_POSTS } from '../constants'
import { addPost, receivedPosts } from './posts/posts'

type Action = AddPost | ReceivePosts

const initialState: Entities = {
    postsById: []
}

export const entities = (state: Entities = initialState, action: Action): Entities => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsById: addPost(state.postsById, action)

            }
        case RECEIVE_POSTS:
            return {
                ...state,
                postsById: receivedPosts(state.postsById, action)
            }
        default:
            return state
    }
}
