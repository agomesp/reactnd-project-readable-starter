import React, { Component } from 'react';
import Nav from './Nav'
import Dashboard from './Dashboard'
import PostPage from './PostPage'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentWillMount() {
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
              <Route exact path='/:category/:post_id' component={PostPage} />
              <Route exact path='/:category' component={Dashboard} />
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
