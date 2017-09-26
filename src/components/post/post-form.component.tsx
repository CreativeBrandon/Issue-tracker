import * as React from 'react'
import { Field, FormProps, InjectedFormProps, reduxForm } from 'redux-form'
import {
    RenderField,
    submit,
    validate,
    required,
    minLength2,
    maxLength100
} from '../forms'

export interface PostFormProps extends FormProps { }

/**
 * NOTE: Initial values are passed in via Parent Component(HOC)
 */
class PostFormComponent extends React.Component<InjectedFormProps, {}> {

    renderField(field: RenderField) {
        const { input, label, type, meta: { touched, error } } = field

        return (
            <div className="input-row">
                <input {...input} placeholder={label} type={type} />
                {touched && error &&
                    <span className="error">{error}</span>}
            </div>
        )
    }

    render() {
        const { handleSubmit, submitting } = this.props

        return (
            <form onSubmit={handleSubmit(submit)} >
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" component={this.renderField} validate={[required, minLength2]} />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <Field name="status" type="select" component={this.renderField} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Field
                        name="description"
                        type="textarea"
                        component={this.renderField}
                        validate={[required, minLength2, maxLength100]}
                    />
                </div>
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        )
    }
}

export const postFormComponent = reduxForm({
    form: 'post',
    validate
})(PostFormComponent)
