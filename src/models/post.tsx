export interface PostBase {
    description?: string
    title: string
    status: string
}

export interface Post extends PostBase{
    id: number
    isCompleted: boolean
}

export type IState = Post[]
