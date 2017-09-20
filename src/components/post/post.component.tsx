import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Post } from '../../models'

const styles = require('./post.component.css')

interface PostComponentProps {
    post: Post
}

interface PostComponentState { }

export class PostComponent extends React.Component<PostComponentProps, PostComponentState> {

    render() {
        const post = this.props.post

        return (
            <article className={styles.post}>
                <header className={styles.header}>
                    <img className={styles.avatar} src={post.user.avatar} alt={post.user.username} />
                    <div className={styles.headerInfo}>
                        <h3 className={styles.title}>{post.title}</h3>
                        <h4 className={styles.username}>{post.user.username}</h4>
                    </div>
                </header>

                <div className={styles.content}>
                    <p>{post.description}</p>
                    <span>ID: {post.id}</span>
                </div>

                <footer className={styles.postFooter}>
                    <div><span>Status:</span> {post.status} | <span>isCompleted:</span> {post.isCompleted} </div>
                    <div className={styles.actions}>
                        <NavLink className={styles.actionLink} activeClassName={styles.active} exact={true} to={`/post/${post.id}/edit`} >
                            Edit
                        </NavLink>
                    </div>
                </footer>
            </article>
        )
    }
}