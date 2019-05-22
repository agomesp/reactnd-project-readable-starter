import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../API.js'
import { formatDate } from '../helpers.js'
import { handleVote } from '../actions/posts'

class Post extends Component {
  processVote = (id, option)  => {
    this.props.dispatch(handleVote(id,option))
  }

  render(){
    console.log('props:', this.props)
    const post = this.props.post
    return(
          <div className='post'>
            <div className='title-ctg'>
              <p className='title-post'>{post.title}</p>
              <p className='date-post'>{formatDate(post.timestamp)}</p>
              <ul>
                <li>{post.category}</li>
              </ul>
            </div>
            <p className='post-text'>{post.body}</p>
            <div className='bottom-post'>
              <span className='upvote' onClick={this.processVote(post.id, 'upVote')}>^</span><span className='vote'> {post.voteScore} </span><span className='downvote'>v</span>
              <p><span className='edit-post'>edit</span> | <span>delete</span></p>
            </div>
          </div>
    )
  }
}


export default connect()(Post)
