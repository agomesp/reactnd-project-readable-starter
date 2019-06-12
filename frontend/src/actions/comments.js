import { getPostAndComments } from '../API.js'

export const ADD_COMMENT = 'ADD_COMMENT'

export function addComment(comments) {
  return{
    type: ADD_COMMENT,
    comments
  }
}
