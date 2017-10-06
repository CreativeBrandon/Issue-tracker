import { PostsByIds } from './'

export interface EntitiesPost {
    allIds: number[]
    byIds: PostsByIds
}

export interface EntitiesState {
    posts: EntitiesPost
}
