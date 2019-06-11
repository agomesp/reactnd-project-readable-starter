import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote, handleDeletePost, handleGetPost } from '../actions/posts'

class Post extends Component {

  componentWillMount(){
    console.log('hi9', this.props)
  }

  render(){
    const post = this.props.posts
    return(

          <div className='post'>
            <div className='title-ctg'>
              <p className='title-post'>{post.title} - by {post.author}</p>
              <p className='date-post'>{formatDate(post.timestamp)}</p>
              <ul>
                <li>{post.category}</li>
              </ul>
            </div>
            <p className='post-text'>{post.body}</p>
            <div className='bottom-post'>
              <span>{post.commentCount} comments</span>
              <p><span className='edit-post'>edit</span> | <span onClick={this.processDelete}>delete</span></p>
            </div>
          </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Post)
