import React, { Component } from 'react';
import CommentPage from './CommentPage'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Comment from './Comment'

class App extends Component {
  render() {
    return (
      <div>
        <div className='head'>
          <h1>Movie Board</h1>
        </div>
        <Nav />

        <Comment />

        <CommentPage />
      </div>
    );
  }
}

export default App;
