import * as constants from '../constants';
import { Post } from '../models'

export interface AddPost {
    type: constants.ADD_POST
    payload: Post
}

export interface UpdatePost {
    type: constants.UPDATE_POST
    payload: Post
}

export interface RemovePost {
    type: constants.REMOVE_POST
    payload: Post
}

export type PostActions = AddPost | UpdatePost | RemovePost

export function addPost(Post: Post): AddPost {
    return {
        type: constants.ADD_POST,
        payload: Post
    }
}

export function updatePost(post: Post): UpdatePost {
    return {
        type: constants.UPDATE_POST,
        payload: post
    }
}

export function removePost(post: Post): RemovePost {
    return {
        type: constants.REMOVE_POST,
        payload: post
    }
}
