import * as React from 'react'
// import { Link } from 'react-router-dom'
import { Post } from '../../models'

interface PostComponentProps {
    post: Post
}

interface PostComponentState {}

export class PostComponent extends React.Component<PostComponentProps, PostComponentState> {

    render() {
        const post = this.props.post

        return (
            <div className="post">
                <h3><span>Title:</span> {post.title}</h3>
                <h4><span>Id:</span> {post.id}</h4>
                <div><span>Status:</span> {post.status} | <span>isCompleted:</span> {post.isCompleted} </div>
                <p><span>Description: </span> {post.description}</p>
            </div>
        )
    }
}