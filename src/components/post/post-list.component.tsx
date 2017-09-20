import * as React from 'react'
import { Post, EntitiesPost } from '../../models'
import { PostComponent } from '../../components'

const styles = require('./post-list.component.css')

interface PostListProps {
    posts: EntitiesPost
}

interface PostListState { }

export class PostListComponent extends React.Component<PostListProps, PostListState> {
    render() {
        const { posts } = this.props

        const postList = posts.allIds.map((id: number) => {
            const post: Post = posts.byIds[id]
            return <li className={styles.listItem}><PostComponent key={post.id} post={post} /></li>
        })

        return (
            <section className={styles.postContainer}>
                <h3 className={styles.title}>Posts</h3>
                <ul className={styles.postList}>{postList}</ul>
                {posts.allIds.length > 0 &&
                    <span />
                }
            </section>
        )
    }
}
