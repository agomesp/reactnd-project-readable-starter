import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote } from '../actions/posts'

class Post extends Component {
  state = {
    lastOption: ''
  }

  processVote = (e)  => {
    const id = this.props.post.id
    const option = e.currentTarget.value

    if(this.state.lastOption === '' || this.state.lastOption !== option){
      this.props.dispatch(handleVote(id, option))
      this.setState({lastOption: option})
    }

  }

  render(){
    console.log('props:', this.props)
    const post = this.props.post
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
              <button className='upvote' onClick={this.processVote} value='upVote'>^</button><span className='vote'> {post.voteScore} </span><button className='downvote' value='downVote' onClick={this.processVote}>v</button>
              <span>{post.commentCount} comments</span>
              <p><span className='edit-post'>edit</span> | <span>delete</span></p>
            </div>
          </div>
    )
  }
}

export default connect()(Post)
