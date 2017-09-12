import { Post } from '../models'

interface JsonData {
    posts: Post[]
}

const data: JsonData = require('./data.json')

export const fetchInitialPosts = () => {
    return data.posts
}

export const fetchPosts = (url: string) => {
    return fetch(url)
        .then((res) => {
            if (!res.ok) { throw Error(res.statusText) }
            return res
        })
        .then((res) => {
            return res.json()
        })
        .catch((err) => { throw Error(err) })
}
