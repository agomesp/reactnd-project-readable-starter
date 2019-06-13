import { getPostAndComments, commentVote } from '../API.js'

export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

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
