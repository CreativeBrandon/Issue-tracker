import * as React from 'react'
import { Post, EntitiesPost } from '../../models'
import { PostComponent } from '../../components'

interface PostListProps {
    posts: EntitiesPost
}

interface PostListState { }

export class PostListComponent extends React.Component<PostListProps, PostListState> {
    render() {
        const { posts } = this.props

        const postList = posts.allIds.map((id: number) => {
            const post: Post = posts.byIds[id]
            return <PostComponent key={post.id} post={post} />
        })

        return (
            <section className="posts-list">
                <h3>Posts</h3>
                <ul>{postList}</ul>
                {posts.allIds.length > 0 &&
                    <span />
                }
            </section>
        )
    }
}
