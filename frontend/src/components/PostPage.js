import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote, handleDeletePost, handleGetPost, handleEditPost } from '../actions/posts'
import { handlePostAndComments } from '../actions/shared.js'

class Post extends Component {
  state = {
    lastOption: '',
    editing: false
  }

  processVote = (e)  => {
    const id = this.props.posts.id
    const option = e.currentTarget.value

    if(this.state.lastOption === '' || this.state.lastOption !== option){
      this.props.dispatch(handleVote(id, option))
      this.setState({lastOption: option})
      this.props.dispatch(handleGetPost(this.props.history.location.pathname.replace('/post/', '')))
    }

  }

  processDelete = (e) => {
    const posts = Object.keys(this.props.posts).map((key) => this.props.posts[key].id !== this.props.post.id ? this.props.posts[key] : false)
    console.log('postswww:', posts)
    this.props.dispatch(handleDeletePost(posts, this.props.post.id))
  }

  showEdit = (e) => {
    this.setState({editing: true})
  }

  processEdit = (e) => {
    e.preventDefault()

    const id = this.props.posts.id
    const body = document.getElementsByClassName('input-text')[0].value
    const title = document.getElementsByClassName('input-subject')[0].value
    console.log('testinga', id, body, title)
    this.props.dispatch(handleEditPost(id, title, body))
  }

  componentWillMount() {
    this.props.dispatch(handlePostAndComments(this.props.history.location.pathname.replace('/post/', '')))
  }

  render(){
    const post = this.props.posts
    const comments = this.props.comments
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
            {comments.map((comment) => {
              return (<Comment comment={comment} key={comment.id}/>)
            })}
            <form>
              <label>Text:</label><input type='text' className='input-text'></input>
              <button className='bnt-Submit' onClick={this.processPostComment}>Comment</button>
            </form>
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
