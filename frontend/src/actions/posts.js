import { postVote, writePost, deletePost, getPost, editPost, getComments, getPostAndComments } from '../API.js'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const VOTE_POST = 'VOTE_POST'
export const SORT_CATEGORIE = 'SORT_CATEGORIE'
export const NEW_POST = 'NEW_POST'
export const SORT_POSTS = 'SORT_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST = 'GET_POST'
export const EDIT_POST = 'EDIT_POST'

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

export function dltPost (posts){
  return{
    type: DELETE_POST,
    posts
  }
}

export function handleDeletePost(posts, id){
  return(dispatch) => {
    return deletePost(id)
    .then(post => {
      dispatch(dltPost(posts))
    })
}}

export function addPost(post, comments) {
  return{
    type: GET_POST,
    post
  }
}

export function handleGetPost(id){
  return(dispatch) => {
    return getPost(id)
    .then(post => {
      dispatch(addPost(post))
    })
  }
}

export function editedPost(post) {
  return{
    type: EDIT_POST,
    post,
  }
}

export function handleEditPost(id, title, body){
  return(dispatch) => {
    return editPost(id, title, body)
    .then(post => {
      dispatch(editedPost(post))
    })
  }
}

export function handleGetComments(id){
  return(dispatch) => {
    return getComments(id)
    .then(comment => comment)
  }
}

export function handlePostAndComments (id) {
  return (dispatch) => {
    return getPostAndComments(id)
      .then(({ post, comments }) => {
        dispatch(addPost(post, comments))
      })
  }
}
