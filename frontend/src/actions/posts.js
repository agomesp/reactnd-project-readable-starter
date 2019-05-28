import { postVote, writePost } from '../API.js'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const VOTE_POST = 'VOTE_POST'
export const SORT_CATEGORIE = 'SORT_CATEGORIE'
export const NEW_POST = 'NEW_POST'
export const SORT_POSTS = 'SORT_POSTS'

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
  }
}

export function sortedCategories(posts) {
  return{
    type: SORT_CATEGORIE,
    posts
  }
}

export function newPost(post){
  return{
    type: NEW_POST,
    post
  }
}

export function handleWrite(id, name, body, category, title){
  return(dispatch) => {
            console.log('write:', id, name, title, body, category, JSON.stringify(Date.now()))
    return writePost(id, name, title, body, category,   Date.now())
      .then(post => {

        dispatch(newPost(post))
      })
    }
}

export function sortPost(posts){
  return{
    type: SORT_POSTS,
    posts
  }
}

export function handleSortDate(posts){
  return(dispatch) => (dispatch(sortPost(posts)))
}
