import * as React from 'react'
import { HeaderComponent, PostListComponent, SideBarComponent } from '../../components'
import * as actions from '../../actions'
import { Post } from '../../models'
import { store } from '../../store'
import './homePage.css'

interface HomePageProps {}

interface HomePageState {
    posts: Post[]
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {

    state: HomePageState = {
        posts: []
    }

    constructor(props: HomePageProps) {
        super(props)
        //this.addPost()
        this.fetchPosts()
    }

    componentWillMount() {
        console.info('will mount')
    }

    componentDidMount() {
        console.info('did mount')
    }

    componentDidUpdate() {
        console.info('did update after state change')
    }

    fetchPosts() {
        this.state.posts = store.getState().posts
    }

    addPost() {
        store.dispatch(actions.addPost({
            id: 4,
            title: 'Redux fix',
            description: 'updated redux actions',
            status: 'pending',
            isCompleted: false
        }))
    }

    render() {
        return (
            <section className="App">
                <HeaderComponent title="Home Page" />
                <SideBarComponent />
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <PostListComponent posts={this.state.posts} />
            </section>
        )
    }
}

export default HomePage;
