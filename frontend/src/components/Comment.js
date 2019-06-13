import React, { Component } from 'react';
import { handleVoteComment } from '../actions/comments'
import { connect } from 'react-redux'

class Comment extends Component {

  state = {
    lastOption: ''
  }

  processVoteComment = (e)  => {
    const id = this.props.comment.id
    const option = e.currentTarget.value

    if(this.state.lastOption === '' || this.state.lastOption !== option){
      this.props.dispatch(handleVoteComment(id, option))
      this.setState({lastOption: option})
    }

  }

  render() {
    const comment = this.props.comment
    return (
      <div>
        <p>{comment.body}</p>
        <p>by - {comment.author}</p>
        <button className='upvote' onClick={this.processVoteComment} value='upVote'>^</button>
        <span className='vote'> {comment.voteScore} </span>
        <button className='downvote' value='downVote' onClick={this.processVoteComment}>v</button>
        <hr/>
      </div>
    );
  }
}

export default connect()(Comment)
