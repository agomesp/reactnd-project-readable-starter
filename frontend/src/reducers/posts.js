import { RECEIVE_POSTS } from '../actions/posts'
import { RECEIVE_POST } from '../actions/posts'
import { VOTE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return{
        ...state,
        ...action.posts
      }

    case RECEIVE_POST:
      return {
        ...state,
        ...action.post
      }

      case VOTE_POST:
       return{
         ...state,
       //   Object.keys(state).map((key) => posts[key].id === action.id ? {voteScore: posts[key].voteScore + 1} : {voteScore})
        ...action.posts
      }

    default:
      return state

  }
}
