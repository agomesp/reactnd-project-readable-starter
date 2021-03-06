import { RECEIVE_POSTS } from '../actions/posts'
import { VOTE_POST } from '../actions/posts'
import { SORT_CATEGORIE } from '../actions/posts'
import { NEW_POST } from '../actions/posts'
import { SORT_POSTS } from '../actions/posts'
import { DELETE_POST } from '../actions/posts'
import { GET_POST } from '../actions/posts'
import { EDIT_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

      case VOTE_POST:
        if (state.map) {
          return [
            ...state.map(item => {
              if(item.id === action.post.id) return action.post
              return item
              // item.id === action.post.id ? action.post : item
            })
          ]
        } else {
          return state
        }

      case SORT_CATEGORIE:
        return action.posts

      case NEW_POST:
        return [
          ...state,
          action.post
        ]

      case SORT_POSTS:
        return action.posts

      case DELETE_POST:
        return action.posts

      case GET_POST:
        return action.post

      case EDIT_POST:
        if(state.map){
          return [
            ...state.map(item => {
              if(item.id === action.post.id) return action.post
              return item
            })
          ]
        }else{
          return action.post
        }


    default:
      return state

  }
}
