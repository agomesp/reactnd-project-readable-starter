import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSortCategorie } from '../actions/categories'
import { Link, withRouter } from 'react-router-dom'
import NewPost from './NewPost'
import { handleSortDate } from '../actions/posts'

class Nav extends Component {
  state = {
    writeClicked: false,
    sorted: false,
    sortedNew: false,
    sortedOld: false,
  }

  handleWriteClick = (e) => {
    e.preventDefault()
    this.setState({writeClicked: true})
  }

  handleSort = (e) => {
    e.preventDefault()
    const posts = this.props.posts
    let postsSorted = posts
    if(this.state.sortedNew) {
      this.setState({sortedNew: false, sortedOld: true})
       postsSorted = Object.keys(posts).sort((a,b) => posts[a].timestamp - posts[b].timestamp)
        .map((key) => posts[key])
    } else {
      this.setState({sortedNew: true, sortedOld: false})
       postsSorted = Object.keys(posts).sort((a,b) => posts[b].timestamp - posts[a].timestamp)
      .map((key) => posts[key])
    }

    this.props.dispatch(handleSortDate(postsSorted))
  }


  render() {
    const sortCategorie = (e) => {
      this.props.dispatch(handleSortCategorie(e.currentTarget.value))
    }

    const categories = this.props.categories
    return (
      <div>
        <div className='head'>
          <a href='/'><h1>READABLE</h1></a>
        </div>
        <div className='nav'>
          <span className='selected' onClick={this.handleSort}>Sort by Date</span>
          <div className='container-btn-category'>
            {Object.keys(categories).map((key) => (
              <Link to={`/${categories[key].path}`} key={key}>
                <button onClick={sortCategorie} value={categories[key].name}>{categories[key].name}</button>
              </Link>
            ))}
          </div>

          <button className='write-btn' onClick={this.handleWriteClick}>write</button>

          {this.state.writeClicked ? <NewPost /> : <div></div>}

        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  }
}

export default withRouter(connect(mapStateToProps)(Nav));
