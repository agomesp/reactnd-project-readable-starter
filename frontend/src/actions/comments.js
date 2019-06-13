import { commentVote, writeComment, editComment, deleteComment } from '../API.js'

export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const NEW_COMMENT = 'NEW_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'


export function newComment(comment){
  return{
    type: NEW_COMMENT,
    comment
  }
}

export function handleWrite(id, timestamp, body, author, parentId){
  return(dispatch) => {
    return writeComment(id, timestamp, body, author, parentId)
      .then(comment => {
        dispatch(newComment(comment))
      })
    }
}


export function addComment(comments) {
  return{
    type: ADD_COMMENT,
    comments
  }
}


export function voteComment(comment){
  return {
    type: VOTE_COMMENT,
    comment
  }
}

export function handleVoteComment(id, option){
  return (dispatch) => {
    return commentVote(id, option)
      .then( comment => {
        dispatch(voteComment(comment))
      })
  }
}

export function editedComment(comment){
  return{
    type: EDIT_COMMENT,
    comment
  }
}

export function handleEditComment(id, text){
  return(dispatch) => {
    return editComment(id, text)
    .then(comment => {
      dispatch(editedComment(comment))
    })
  }
}

export function dltComment (comments){
  return{
    type: DELETE_COMMENT,
    comments
  }
}

export function handleDeleteComment(comments, id){
  return(dispatch) => {
    return deleteComment(id)
    .then(comment => {
      console.log('auuuuu', comment, comments)
      dispatch(dltComment(comments))
    })
}}
