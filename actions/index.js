import {
  INPUT_CHANGE,
  FETCH_GIF_REQUEST,
  FETCH_GIF_FAILURE,
  FETCH_GIF_SUCCESS
} from '../constants/action-types'

const API_KEY = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc'

export const inputChange = inputValue => {
  return {
    type: INPUT_CHANGE,
    payload: inputValue
  }
}

export const requestGif = () => {
  return {
    type: FETCH_GIF_REQUEST
  }
}

export const requestFailure = error => {
  return {
    type: FETCH_GIF_FAILURE,
    payload: error
  }
}

export const requestSuccess = response => {
  return {
    type: FETCH_GIF_SUCCESS,
    payload: response
  }
}

export function fetchGif(item) {
  return function(dispatch) {
    dispatch(requestGif())
    return fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${item}&limit=25&offset=0&rating=Y&lang=en`
    )
      .then(
        response => response.json(),
        error => {
          console.log('An error occurred.', error)
          dispatch(requestFailure(error))
        }
      )
      .then(response => {
        dispatch(requestSuccess(response))
      })
  }
}
