import { PostActions } from '../../actions'
import { Post } from '../../models'
import { ADD_POST, UPDATE_POST, REMOVE_POST } from '../../constants'

const initialState: Post[] = []

export const posts = (state: Post[] = initialState, action: PostActions): Post[] => {
    const { type, payload } = action

    switch (type) {
        case ADD_POST:
            return [...state, payload]
        case UPDATE_POST:
            return state.map(post => {
                if (post.id !== payload.id) { return post; }
                return payload
            })
        case REMOVE_POST:
            return state
        default:
            return state;
    }
}
