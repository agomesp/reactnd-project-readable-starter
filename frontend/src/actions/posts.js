import { postVote } from '../API.js'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const VOTE_POST = 'VOTE_POST'


export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function receivePost (post) {
  return {
    type: RECEIVE_POST,
    post,
  }
}

export function votePost(posts){
  return {
    type: VOTE_POST,
    posts
  }
}

export function handleVote(id, option){
  return (dispatch) => {
    return postVote(id, option)
      .then(({ posts }) => {
        dispatch(votePost(posts))
      })
  }
}
