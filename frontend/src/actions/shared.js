import { getInitialData } from '../API.js'
import { receivePosts } from '../actions/posts'
import { receiveCategories } from '../actions/categories'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receivePosts(posts))
        dispatch(receiveCategories(categories))
      })
  }
}
