import { AddPost, ReceivedPosts } from '../actions'
import { Entities } from '../models'
import { ADD_POST, RECEIVE_POSTS } from '../constants'
import { addPost } from './posts/posts'

type Action = AddPost | ReceivedPosts

const initialState: Entities = {
    posts: {
        allIds: [],
        byIds: {}
    }
}

export const entities = (state: Entities = initialState, action: Action): Entities => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: addPost(state.posts, action)
            }
        case RECEIVE_POSTS:
            return state
        default:
            return state
    }
}
