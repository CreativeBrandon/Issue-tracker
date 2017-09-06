export type Post = {
    id: number
    description?: string
    title: string
    status: string
    isCompleted: boolean
}

export type IState = Post[]
