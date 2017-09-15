import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { StoreState, Entities } from '../../models'
import { store } from '../../store'
import { HeaderComponent, PostListComponent, SideBarComponent } from '../../components'
import './homePage.css'

interface HomePageProps {
    entities: Entities
    actions: any
}

interface HomePageState { }

class HomePage extends React.Component<HomePageProps, HomePageState> {

    interval: number;
    _unsubscribe: Function;

    constructor(props: HomePageProps) {
        super(props)
    }

    componentDidMount() {
        this._unsubscribe = store.subscribe(() => { })
        if (this.props.entities.posts.allIds.length === 0) { this.props.actions.fetchPosts() }
        this.interval = window.setInterval(() => {
            this._addPost()
            clearInterval(this.interval)
        }, 3000)
    }

    componentWillUnmount() {
        this._unsubscribe()
    }

    _addPost() {
        store.dispatch(actions.addPost({
            id: Math.floor(Math.random() * (1000 - 5 + 1) + 5),
            title: 'Added one more post',
            description: 'Simulate adding one more post',
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
                <PostListComponent posts={this.props.entities.posts} />
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
        actions: bindActionCreators({ fetchPosts: actions.fetchPosts }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
