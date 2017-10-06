import { FormErrors, SubmissionError } from 'redux-form'
import { Dispatch } from 'redux'
import * as actions from '../../actions'
import { Post, StoreState } from '../../models'

const randomId = () =>  Math.floor(Math.random() * (100 - 0) + 0)

export const submit = (post: Readonly<Post>, dispatch: Dispatch<StoreState>, props: {}) => {

    if (!post) {
        throw new SubmissionError({
            _error: 'All values are empty'
        })
    } else {
        const notification = {
            id: randomId(),
            postId: post.id,
            message: 'Post Updated',
            read: false,
            isDeleted: false
        }

        dispatch(actions.updatePost(post))
        dispatch(actions.addNotification(notification))
        alert('form submitted')
    }
}

export const validate = (post: Readonly<Post>): FormErrors<Post> => {
    const errors: FormErrors<Post> = {}

    return errors
}
