import React, { Component } from 'react';
import { handleVoteComment, handleEditComment, handleDeleteComment } from '../actions/comments'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Comment extends Component {

  state = {
    lastOption: '',
    editing: false
  }

  processVoteComment = (e)  => {
    const id = this.props.comment.id
    const option = e.currentTarget.value

    if(this.state.lastOption === '' || this.state.lastOption !== option){
      this.props.dispatch(handleVoteComment(id, option))
      this.setState({lastOption: option})
    }
  }

  showEdit = (e) => {
    this.setState({editing: true})
  }

  processEdit = (e) => {
    e.preventDefault()

    const id = this.props.comment.id
    const body = document.getElementsByClassName('input-text')[0].value
    this.props.dispatch(handleEditComment(id, body))
  }

  processDelete = (e) => {
    const comments = this.props.comments.map((comment) => comment.id !== this.props.comment.id ? comment : false)
    this.props.dispatch(handleDeleteComment(comments, this.props.comment.id))
  }

  render() {
    const comment = this.props.comment
    return (
      comment !== false ?
      <div>
        <p>{comment.body}</p>
        <p>by - {comment.author}</p>
        <button className='upvote' onClick={this.processVoteComment} value='upVote'>^</button>
        <span className='vote'> {comment.voteScore} </span>
        <button className='downvote' value='downVote' onClick={this.processVoteComment}>v</button>
        <p><span className='edit-post' onClick={this.showEdit}>edit</span>
        | <span onClick={this.processDelete}>delete</span></p>

        {this.state.editing === true
          ?
          <div>
            <form>
              <label>Text:</label><input type='text' className='input-text' defaultValue={comment.body}></input>
              <button className='bnt-Submit' onClick={this.processEdit}>Edit</button>
            </form>
          </div>
          :
          <div></div>
        }
        <hr/>
      </div>
      :
      <div></div>
    );
  }
}

function mapStateToProps({ comments }) {
  return {
    comments
  }
}

export default withRouter(connect(mapStateToProps)(Comment))
