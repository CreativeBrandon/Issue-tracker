import { AddPost, ReceivePosts } from '../../actions'
import { Post } from '../../models'
import { ADD_POST, RECEIVE_POSTS } from '../../constants'

export const addPost = (state: Post[] = [], action: AddPost) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload]
        default:
            return state
    }
}

export const receivedPosts = (state: Post[] = [], action: ReceivePosts) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload
        default:
            return state
    }
}
