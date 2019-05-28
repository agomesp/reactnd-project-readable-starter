import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleWrite } from '../actions/posts'

class NewPost extends Component {

  processWrite = (e) => {
    e.preventDefault()

    const id = Math.random() * Date.now()
    const name = document.getElementsByClassName('input-name')[0].value
    const body = document.getElementsByClassName('input-text')[0].value
    const category = document.getElementsByClassName('select-category')[0].value
    const title = document.getElementsByClassName('input-subject')[0].value

    this.props.dispatch(handleWrite(id, name, body, category, title))
  }

  render(){
    return(
      <div>
        <form>
          <label>Name:</label><input type='text' className='input-name'></input>
          <label>Subject:</label><input type='text' className='input-subject'></input>
          <label>Text:</label><input type='text' className='input-text'></input>
          <label>Category:</label>
          <select className='select-category'>
            <option value='react'>React</option>
            <option value='redux'>Redux</option>
            <option value='udacity'>Udacity</option>
          </select>
          <button className='bnt-Submit' onClick={this.processWrite}>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewPost)
