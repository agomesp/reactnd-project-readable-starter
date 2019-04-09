import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className='post'>
        <div className='title-ctg'>
          <p className='title-post'>Name</p>
          <p className='date-post'>Wed 02/03/2019</p>
          <ul>
            <li>category</li>
          </ul>
        </div>
        <p className='post-text'>Text</p>
        <div className='bottom-post'>
          <span className='upvote'>^</span><span className='vote'> 2 </span><span className='downvote'>v</span>
          <p><span className='edit-post'>edit</span> | <span>delete</span></p>
        </div>
      </div>
    );
  }
}

export default Comment;
