import { RECEIVE_POSTS } from '../actions/posts'
import { RECEIVE_POST } from '../actions/posts'
import { VOTE_POST } from '../actions/posts'
import { SORT_CATEGORIE } from '../actions/posts'
import { NEW_POST } from '../actions/posts'


export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    case RECEIVE_POST:
      return {
        ...state,
        ...action.post
      }

      case VOTE_POST:
        console.log('ação, votepost:', action)
        return [
          ...state.map(item => {
            if(item.id === action.post.id) return action.post
            return item
            // item.id === action.post.id ? action.post : item
          })
        ]

      case SORT_CATEGORIE:
        return action.posts

      case NEW_POST:
        return [
          ...state,
          action.post
        ]

    default:
      return state

  }
}