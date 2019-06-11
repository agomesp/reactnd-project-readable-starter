import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../helpers.js'
import { handleVote, handleDeletePost, handleGetPost } from '../actions/posts'
import { Link, withRouter } from 'react-router-dom'

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

  processDelete = (e) => {
    const posts = Object.keys(this.props.posts).map((key) => this.props.posts[key].id !== this.props.post.id ? this.props.posts[key] : false)
    console.log('postswww:', posts)
    this.props.dispatch(handleDeletePost(posts, this.props.post.id))
  }

  processPost = (e) => {
    this.props.dispatch(handleGetPost(this.props.post.id))
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
              <p><span className='edit-post'>edit</span> | <span onClick={this.processDelete}>delete</span></p>
            </div>
          </div>
        :
        <div></div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  }
}

export default withRouter(connect(mapStateToProps)(Post))
