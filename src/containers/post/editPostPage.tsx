import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { } from 'react-router-dom'
import * as actions from '../../actions'
import { Entities, StoreState } from '../../models'
import { store } from '../../store'
import {
    HeaderComponent,
    postFormComponent as PostFormComponent,
    PostFormState, SideBarComponent
} from '../../components';

import './editPostPage.css'

interface EditPostPageProps {
    entities: Entities
    actions: any
    match: any
}

interface EditPostPageState { }

class EditPostPage extends React.Component<EditPostPageProps, EditPostPageState> {

    editingPost: any;

    componentDidMount() {
        if (this.props.entities.posts.allIds.length === 0) { this.props.actions.fetchPosts() }

        const { postId } = this.props.match.params
        const entities: Entities = store.getState().entities
        this.editingPost = entities.posts.byIds[postId]
    }

    submit(values: PostFormState) {
        console.info('form submitted', values)
    }

    render() {
        return (
            <section className="App editPostPage">
                <HeaderComponent title="Edit Post" />
                <SideBarComponent />
                <PostFormComponent onSubmit={this.submit} />
            </section>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        entities: {
            posts: state.entities.posts
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
    return {
        actions: bindActionCreators({ fetchPosts: actions.fetchPosts, updatePost: actions.updatePost }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage)
