import { FormErrors, SubmissionError } from 'redux-form'
import { Dispatch } from 'redux'
import * as actions from '../../actions'
import { Post, StoreState } from '../../models'

export const submit = (post: Readonly<Post>, dispatch: Dispatch<StoreState>, props: {}) => {

    if (!post) {
        throw new SubmissionError({
            _error: 'All values are empty'
        })
    } else {
        dispatch(actions.updatePost(post))
        alert('form submitted')
    }
}

export const validate = (post: Readonly<Post>): FormErrors<Post> => {
    const errors: FormErrors<Post> = {}

    return errors
}
