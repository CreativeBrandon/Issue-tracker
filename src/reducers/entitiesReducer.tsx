import { AddPost, ReceivedPosts, UpdatePost } from '../actions'
import { Entities } from '../models'
import { ADD_POST, RECEIVE_POSTS, UPDATE_POST } from '../constants'
import { addPost, updatePost } from './posts/posts'

type Action = AddPost |  ReceivedPosts | UpdatePost

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
        case UPDATE_POST:
            return {
                ...state,
                posts: {
                    allIds: state.posts.allIds,
                    byIds: updatePost(state.posts.byIds, action)
                }
            }
        case RECEIVE_POSTS:
            return state
        default:
            return state
    }
}
