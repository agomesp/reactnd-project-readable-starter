import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote, handleDeletePost, handleEditPost} from '../actions/posts'
import { Link, withRouter } from 'react-router-dom'
import { handlePostAndComments } from '../actions/shared'

class Post extends Component {
  state = {
    lastOption: '',
    editing: false
  }

  processVote = (e)  => {
    const id = this.props.post.id
    const option = e.currentTarget.value

    if(this.state.lastOption === '' || this.state.lastOption !== option){
      this.props.dispatch(handleVote(id, option))
      this.setState({lastOption: option})
    }

  }

  processDelete = (e) => {
    const posts = Object.keys(this.props.posts).map((key) => this.props.posts[key].id !== this.props.post.id ? this.props.posts[key] : false)
    this.props.dispatch(handleDeletePost(posts, this.props.post.id))
  }

  processPost = (e) => {
    this.props.dispatch(handlePostAndComments(this.props.post.id))
  }

  showEdit = (e) => {
    this.setState({editing: true})
  }

  processEdit = (e) => {
    e.preventDefault()

    const id = this.props.post.id
    const body = document.getElementsByClassName('input-text')[0].value
    const title = document.getElementsByClassName('input-subject')[0].value

    this.props.dispatch(handleEditPost(id, title, body))
  }

  render(){
    console.log('props:', this.props)
    const post = this.props.post
    return(
      post !== false ?
          <div className='post'>
            <div className='title-ctg'>
              <Link to={`/post/${post.id}`}>
                <p className='title-post' onClick={this.processPost}>{post.title} - by {post.author}</p>
              </Link>
              <p className='date-post'>{formatDate(post.timestamp)}</p>
              <ul>
                <li>{post.category}</li>
              </ul>
            </div>
            <p className='post-text'>{post.body}</p>
            <div className='bottom-post'>
              <button className='upvote' onClick={this.processVote} value='upVote'>^</button><span className='vote'> {post.voteScore} </span><button className='downvote' value='downVote' onClick={this.processVote}>v</button>
              <span>{post.commentCount} comments</span>
              <p><span className='edit-post' onClick={this.showEdit}>edit</span> | <span onClick={this.processDelete}>delete</span></p>
              {this.state.editing === true
                ?
                <div>
                  <form>
                    <label>Title:</label><input type='text' className='input-subject' defaultValue={post.title}></input>
                    <label>Text:</label><input type='text' className='input-text' defaultValue={post.body}></input>
                    <button className='bnt-Submit' onClick={this.processEdit}>Edit</button>
                  </form>
                </div>
                :
                <div></div>
              }
            </div>
          </div>
        :
        <div></div>
    )
  }
}

function mapStateToProps({ posts, comments }) {
  return {
    posts,
    comments
  }
}

export default withRouter(connect(mapStateToProps)(Post))
