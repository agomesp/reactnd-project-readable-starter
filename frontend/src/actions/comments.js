import { getPostAndComments, commentVote, writeComment } from '../API.js'

export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const NEW_COMMENT = 'NEW_COMMENT'


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
