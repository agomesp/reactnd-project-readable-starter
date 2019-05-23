import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSortCategorie } from '../actions/categories'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
  render() {

    const sortCategorie = (e) => {
      this.props.dispatch(handleSortCategorie(e.currentTarget.value))
    }

    const categories = this.props.categories
    return (
      <div>
        <div className='head'>
          <a href='http://localhost:3000'><h1>READABLE</h1></a>
        </div>
        <div className='nav'>
          <span className='selected'>New</span>
          <div className='container-btn-category'>
            {Object.keys(categories).map((key) => (
              <Link to={`/${categories[key].path}`} key={key}>
                <button onClick={sortCategorie} value={categories[key].name}>{categories[key].name}</button>
              </Link>
            ))}
          </div>

          <button className='write-btn'>write</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(Nav));
