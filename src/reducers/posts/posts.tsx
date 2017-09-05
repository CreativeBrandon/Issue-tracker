import { AppAction } from '../../actions'
import { ADD_POST, UPDATE_POST, REMOVE_POST } from '../../constants'

export interface Post {
    id: number
    description: string
    title: string
}

const initialState: Post[] = []

export const posts = (state: Post[] = initialState, action: AppAction): Post[] => {
    const { type } = action

    switch (type) {
        case ADD_POST:
            return state
        case UPDATE_POST:
            return state
        case REMOVE_POST:
            return state
        default:
            return state;
    }
}
