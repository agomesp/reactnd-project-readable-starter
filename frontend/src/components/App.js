import React, { Component } from 'react';
import CommentPage from './CommentPage'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Comment from './Comment'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>

        <div className='head'>
          <h1>READABLE</h1>
        </div>
        <Nav />

        {this.props.loading === true
          ? null
          : <Dashboard />
        }
      </div>
    );
  }
}

function mapStateToProps ({ posts }) {
  return {
    loading: posts === null
  }
}

export default connect()(App)
