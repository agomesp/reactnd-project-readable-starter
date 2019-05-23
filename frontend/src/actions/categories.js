import { getPostCategorie } from '../API.js'
import { sortedCategories } from '../actions/posts'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  }
}

// export function sortedCategories(posts){
//   return{
//     type: SORT_CATEGORIE,
//     posts
//   }
// }

export function handleSortCategorie(categorie){
  return (dispatch) => {
    return getPostCategorie(categorie)
      .then( posts => {
        console.log('posts from categorie:', posts)
        dispatch(sortedCategories(posts))
      })
//       .then( data => {
//   console.log('data:', data) // <----
//   // dispatch(votePost(posts))
// })
  }
}
