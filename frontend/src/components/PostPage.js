import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote, handleDeletePost, handleGetPost, handleEditPost } from '../actions/posts'
import { handlePostAndComments } from '../actions/shared.js'
import { withRouter } from 'react-router-dom'
import { handleWrite } from '../actions/comments.js'

class Post extends Component {
  state = {
    lastOption: '',
    editing: false,
  }

  processVote = (e)  => {
    const id = this.props.posts.id
    const option = e.currentTarget.value

    if(this.state.lastOption === '' || this.state.lastOption !== option){
      this.props.dispatch(handleVote(id, option))
      this.setState({lastOption: option})
    const location = this.props.history.location.pathname.substring(this.props.history.location.pathname.indexOf("/") + 1)
      this.props.dispatch(handleGetPost(location.substring(location.indexOf("/") + 1)))
    }

  }

  processDelete = (e) => {
    const posts = Object.keys(this.props.posts).map((key) => this.props.posts[key].id !== this.props.posts.id ? this.props.posts[key] : false)
    this.props.dispatch(handleDeletePost(posts, this.props.posts.id))
    this.props.history.push('/')
  }

  showEdit = (e) => {
    this.setState({editing: true})
  }

  processEdit = (e) => {
    e.preventDefault()

    const id = this.props.posts.id
    const body = document.getElementsByClassName('input-text')[0].value
    const title = document.getElementsByClassName('input-subject')[0].value
    this.props.dispatch(handleEditPost(id, title, body))
  }

  processPostComment = (e) => {
    e.preventDefault()

    const id = Math.random() * Date.now()
    const author = document.getElementsByClassName('input-name')[0].value
    const body = document.getElementsByClassName('input-text')[0].value
    const parentId = this.props.posts.id

    this.props.dispatch(handleWrite(id, Date.now(), body, author, parentId))
  }

  componentWillMount() {
    const location = this.props.history.location.pathname.substring(this.props.history.location.pathname.indexOf("/") + 1)
    this.props.dispatch(handlePostAndComments(location.substring(location.indexOf("/") + 1)))
  }

  render(){
    const post = this.props.posts
    const comments = this.props.comments
    console.log('aa', post)
    return(
        post.error !== "There was an error." ?
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
              <p><span className='edit-post' onClick={this.showEdit}>EDIT POST</span> | <span onClick={this.processDelete}>DELETE POST</span></p>
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
              <hr/>
            </div>
            {comments.map((comment) => {
              return (<div key={comment.id}><Comment comment={comment}/></div>)
            })}
            <form>
              <label>Text:</label><input type='text' className='input-text'></input>
              <label>Author:</label><input type='text' className='input-name'></input>
              <button className='bnt-Submit' onClick={this.processPostComment}>Comment</button>
            </form>
          </div>
          :
          <div className='error-404'>
            <h1>ERROR 404</h1>
            <p>Post not found - Go Back to The home Page</p>
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

export default withRouter(connect(mapStateToProps)(Post))
