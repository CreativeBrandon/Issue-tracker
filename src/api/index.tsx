import { Post } from '../models'

interface JsonData {
    posts: Post[]
}

const data: JsonData = require('./data.json')

const handleResponse = (res: Response): Response => {
    if (!res.ok) { throw Error(res.statusText) }
    return res
}

export const fetchInitialPosts = () => {
    return data.posts
}

export const fetchPosts = (url: string) => {
    return fetch(url)
        .then(handleResponse)
        .then(response => response.json())
        .catch((err) => { throw Error(err) })
}
