import {
  FETCH_GIF_REQUEST,
  FETCH_GIF_FAILURE,
  FETCH_GIF_SUCCESS
} from '../constants/action-types'

const initialState = {
  isRequesting: false
}

const searchFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIF_REQUEST:
      return Object.assign({}, state, {
        isRequesting: true
      })
    case FETCH_GIF_FAILURE:
      return Object.assign({}, state, {
        isRequesting: false,
        error: action.payload
      })
    case FETCH_GIF_SUCCESS:
      return Object.assign({}, state, {
        isRequesting: false,
        response: action.payload
      })
    default:
      return state
  }
}

export default searchFieldReducer
