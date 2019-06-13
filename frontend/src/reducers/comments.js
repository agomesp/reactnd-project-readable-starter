import { ADD_COMMENT, VOTE_COMMENT, NEW_COMMENT } from '../actions/comments'

export default function comments (state = [], action) {
  switch (action.type) {
      case ADD_COMMENT:
        return action.comments

      case VOTE_COMMENT:
        if (state.map) {
          return [
            ...state.map(item => {
              if(item.id === action.comment.id) return action.comment
              return item
            })
          ]
        } else {
          return state
        }

      case NEW_COMMENT:
        return [
          ...state,
          action.comment
        ]

    default:
      return state

  }
}
