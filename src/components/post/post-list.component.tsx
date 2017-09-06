import * as React from 'react'
import { Post } from '../../models'
import { PostComponent } from '../../components'

interface PostListProps {
    posts: Post[]
}

interface PostListState {
    posts: Post[]
}

export class PostListComponent extends React.Component<PostListProps, PostListState> {
    render() {
        const { posts } = this.props

        const postList = posts.map(post => {
            return <PostComponent key={post.id} post={post} />
        })

        return (
            <section className="posts-list">
                <h3>Posts</h3>
                <ul>{postList}</ul>
                {posts.length > 0 && 
                    <span />
                }
            </section>
        )
    }
}
