import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'
import Post from './Post'
import { handleSortCategorie } from '../actions/categories'

class Dashboard extends Component {
  state = {
    hasRoute: false
  }

  componentDidUpdate(){
    const location = this.props.history.location.pathname.replace('/', '')
    if(this.props.history.location.pathname !== '/' && this.state.hasRoute === false){
      console.log('executando', location)
      this.props.dispatch(handleSortCategorie(location))
      this.setState({hasRoute: true})
    }
  }

  render() {
    const posts = this.props.posts
    const categories = this.props.categories
    console.log('test2:', this.props.history.location.pathname)
    return (
      <ul className='ul-posts'>
      {Object.keys(posts).map((key) => (
        <li key={key}>
            <Post post={posts[key]}/>
        </li>
      ))}
      </ul>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    // postIds: Object.keys(posts).sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    //   .map((key) => posts[key].id),
    // posts:
    posts,
    categories
  }
}

export default connect(mapStateToProps)(Dashboard);
