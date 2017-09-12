import * as constants from '../constants';
import { Dispatch } from 'redux'
import {  } from 'redux-thunk'
import * as Api from '../api'
import { Post, StoreState } from '../models'

// Flux Safe Action
export interface FSAction {
    type: string
    payload?: any | Error
    error: Error
    meta?: any
}

export interface AddPost {
    type: constants.ADD_POST
    payload: Post
}

export interface RequestPosts extends FSAction {
    type: constants.REQUEST_POSTS
}

export interface ReceivePosts extends FSAction {
    type: constants.RECEIVE_POSTS
    payload: Post[]
}

export function addPost(post: Post): AddPost {
    return {
        type: constants.ADD_POST,
        payload: post
    }
}

export function requestPosts() {
    return {
        type: constants.REQUEST_POSTS
    }
}

export function receivePosts(posts: Post[]) {
    return {
        type: constants.RECEIVE_POSTS,
        payload: posts,
        // receivedAt: Date.now()
    }
}

// Async Action
export function fetchPosts() {
    return (dispatch: Dispatch<StoreState>) => {
        dispatch(requestPosts())

        // API call
        const data: Post[]  = Api.fetchInitialPosts()
        return dispatch(receivePosts(data))
    }
}

export type PostActions = AddPost | RequestPosts | ReceivePosts
