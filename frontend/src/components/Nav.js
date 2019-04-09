import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <span className='selected'>New</span> | <span>Trending</span>
        <div className='container-btn-category'>
          <button>categorie</button>
          <button>categorie</button>
        </div>

        <button className='write-btn'>write</button>
      </div>
    );
  }
}

export default Nav;
