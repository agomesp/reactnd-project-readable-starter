import React, { Component } from 'react';
import Comment from './Comment'

class Dashboard extends Component {
  render() {
    return (
      <ul className='ul-posts'>
        <li key='1'>
          <Comment />
        </li>

        <li key='1'>
          <Comment />
        </li>
      </ul>
    );
  }
}

export default Dashboard;
