import { getInitialData, getPostAndComments } from '../API.js'
import { receivePosts, addPost } from '../actions/posts'
import { receiveCategories } from '../actions/categories'
import { addComment } from '../actions/comments'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receivePosts(posts))
        dispatch(receiveCategories(categories))
      })
  }
}

export function handlePostAndComments (id) {
  return (dispatch) => {
    return getPostAndComments(id)
      .then(({ post, comments }) => {
        dispatch(addPost(post))
        dispatch(addComment(comments))
      })
  }
}
