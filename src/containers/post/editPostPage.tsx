import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { } from 'react-router-dom'
import * as actions from '../../actions'
import { Entities, Post, StoreState } from '../../models'
import { store } from '../../store'
import {
    HeaderComponent,
    postFormComponent as PostFormComponent,
    SideBarComponent
} from '../../components';

import './editPostPage.css'

interface EditPostPageProps {
    entities: Entities
    actions: any
    match: any
}

interface EditPostPageState { }

class EditPostPage extends React.Component<EditPostPageProps, EditPostPageState> {

    editingPost: Post;

    componentDidMount() {
        if (this.props.entities.posts.allIds.length === 0) { this.props.actions.fetchPosts() }
        this.editingPost = this._getEditingPost()
    }

    _getEditingPost(): Post {
        const { postId } = this.props.match.params
        const entities: Entities = store.getState().entities
        return entities.posts.byIds[postId]
    }

    render() {
        return (
            <section className="App editPostPage">
                <HeaderComponent title="Edit Post" />
                <SideBarComponent />
                <PostFormComponent initialValues={this.editingPost} />
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
