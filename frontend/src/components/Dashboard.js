import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comment from './Comment'
import Post from './Post'

class Dashboard extends Component {
  render() {
    const posts = this.props.posts

    console.log(this.props)
    console.log('test:', posts)
    return (
      <ul className='ul-posts'>
      {Object.keys(posts).map((key) => (
        <li key={key}>
          <Post post={posts[key]} />
        </li>
      ))}
      </ul>
    );
  }
}

function mapStateToProps ({ posts }) {
  return {
    // postIds: Object.keys(posts).sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    //   .map((key) => posts[key].id),
    // posts:
    posts
  }
}

export default connect(mapStateToProps)(Dashboard);
