import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote, handleDeletePost, handleGetPost } from '../actions/posts'

class Post extends Component {
  render(){
    const post = this.props.posts
    const comments = this.props.comments
    console.log(comments)
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
            </div>
            {comments.map((comment) => {
              return (<div>
                <p>{comment.body}</p>
                <p>by - {comment.author}</p>
                <hr/>
              </div>)
            })}
          </div>
    )
  }
}

function mapStateToProps({ posts, comments }) {
  return {
    posts,
    comments
  }
}

export default connect(mapStateToProps)(Post)
