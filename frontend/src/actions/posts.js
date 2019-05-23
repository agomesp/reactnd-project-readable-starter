import { postVote } from '../API.js'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const VOTE_POST = 'VOTE_POST'
export const SORT_CATEGORIE = 'SORT_CATEGORIE'


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

export function votePost(post){
  return {
    type: VOTE_POST,
    post
  }
}

export function handleVote(id, option){
  return (dispatch) => {
    return postVote(id, option)
      .then( post => {
        console.log('posts:', post)
        dispatch(votePost(post))
      })
//       .then( data => {
//   console.log('data:', data) // <----
//   // dispatch(votePost(posts))
// })
  }
}

export function sortedCategories(posts) {
  return{
    type: SORT_CATEGORIE,
    posts
  }
}
