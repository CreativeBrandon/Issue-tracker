import * as React from 'react'
import { Field, reduxForm } from 'redux-form'
import { PostBase } from '../../models'

export interface PostFormState extends PostBase { }

interface ReduxFormMeta {
    touched: boolean
    error: any
    warning: any
}

export const renderField = (input: {}, label: string, type: string, meta: ReduxFormMeta) => {
    <div>
        <label>
            {label}
        </label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {meta.touched &&
                ((meta.error &&
                    <span>
                        {meta.error}
                    </span>
                ) || (meta.warning &&
                    <span>
                        {meta.warning}
                    </span>)
                )
            }
        </div>
    </div>
}

class PostFormComponent extends React.Component<any, PostFormState> {

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" component="input"  />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <Field name="status" component="select" type="select" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Field name="description" component="textarea" type="textarea" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export const postFormComponent = reduxForm({
    form: 'post',
})(PostFormComponent)
