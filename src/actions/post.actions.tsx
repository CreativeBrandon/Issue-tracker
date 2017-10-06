import * as constants from '../constants';
import { Dispatch } from 'redux'
import * as Api from '../api'
import { Post, StoreState } from '../models'
import { FSAction } from './fsaction'

export interface AddPost extends FSAction {
    type: constants.ADD_POST
    payload: Post
}

export interface UpdatePost extends FSAction {
    type: constants.UPDATE_POST
    payload: Post
}

export interface RequestPosts extends FSAction {
    type: constants.REQUEST_POSTS
}

export interface ReceivedPosts extends FSAction {
    type: constants.RECEIVE_POSTS
    payload: Post[]
}

export function addPost(post: Post): AddPost {
    return {
        type: constants.ADD_POST,
        payload: post
    }
}

export function updatePost(post: Post): UpdatePost {
    return {
        type: constants.UPDATE_POST,
        payload: post
    }
}

export function requestPosts() {
    return {
        type: constants.REQUEST_POSTS
    }
}

export function receivedPosts(posts: Post[]) {
    return {
        type: constants.RECEIVE_POSTS,
        payload: posts
    }
}

// Async Action
export function fetchPosts() {
    return (dispatch: Dispatch<StoreState>) => {
        dispatch(requestPosts())

        const data: Post[] = Api.fetchInitialPosts()
        // dispatch(receivedPosts(data))

        return data.forEach((post) => {
            dispatch(addPost(post))
        })
    }
}

export type PostActions = AddPost | UpdatePost // | RequestPosts | ReceivedPosts
