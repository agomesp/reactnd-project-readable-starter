import React, { Component } from 'react';
import CommentPage from './CommentPage'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Comment from './Comment'
import PostPage from './PostPage'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link, withRouter} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          {this.props.loading === true
            ? null
            :
            <div>
              <Route exact path='/' component={Dashboard} />
              <Route path='/post' component={PostPage} />
            </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    loading: posts === null,
  }
}

export default connect(mapStateToProps)(App)
