import { UserModel } from './user'

export interface PostBase {
    description?: string
    title: string
    status: string
}

export interface Post extends PostBase{
    id: number
    isCompleted: boolean
    user: UserModel
}

export interface PostsByIds {
    [index: number]: Post
}

export type IState = Post[]
