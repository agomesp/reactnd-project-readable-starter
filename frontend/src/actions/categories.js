import { getPostCategorie } from '../API.js'
import { sortedCategories } from '../actions/posts'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}


export function handleSortCategorie(categorie){
  return (dispatch) => {
    return getPostCategorie(categorie)
      .then( posts => {
        dispatch(sortedCategories(posts))
      })
  }
}
