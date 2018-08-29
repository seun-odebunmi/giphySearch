import { INPUT_CHANGE } from '../constants/action-types'

const initialState = {
  keyword: ''
}

const searchFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return Object.assign({}, state, {
        keyword: action.payload
      })
    default:
      return state
  }
}

export default searchFieldReducer
