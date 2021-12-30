import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                PostList
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList)
