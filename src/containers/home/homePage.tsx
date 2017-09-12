import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Post, StoreState } from '../../models'
import { store } from '../../store'
import * as Api from '../../api'
import { HeaderComponent, PostListComponent, SideBarComponent } from '../../components'
import './homePage.css'

interface HomePageProps {
    onAddPost?: () => void
    onUpdatePost?: () => void
    onRemovePost?: () => void
}
interface JsonPlaceholderTodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface HomePageState {
    posts: Post[]
    todos: JsonPlaceholderTodo[]
    isLoading: boolean
}

class HomePage extends React.Component<any, HomePageState> {

    interval: any;

    constructor(props: HomePageProps) {
        super(props)
    }

    componentDidMount() {
        if (this.props.entities.postsById.length === 0) this.props.actions.fetchPosts()
        console.info('Homepage did mount, state:', this.props)
        this.interval = setInterval(() => {
            this.addPost()
            clearInterval(this.interval)
        }, 3000);

    }

    componentWillUnMount() {
        console.info('Homepage will unmount:')
    }

    fetchPosts() {
        const promise = Api.fetchPosts('https://jsonplaceholder.typicode.com/todos')
        promise.then((posts: JsonPlaceholderTodo) => this.state.todos)
    }

    addPost() {
        store.dispatch(actions.addPost({
            id: Math.floor(Math.random() * (1000 - 5 + 1) + 5),
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
                <PostListComponent posts={this.props.entities.postsById} />
            </section>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    console.info('prop state', state)
    return {
        entities: {
            postsById: state.entities.postsById
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
    console.info('mapDispatchToProps dispatch')
    return {
        actions: bindActionCreators({ fetchPosts: actions.fetchPosts }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
