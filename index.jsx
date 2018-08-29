import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import ResultsListReducer from 'reducers/resultsList'
import SearchFieldReducer from 'reducers/searchField'
import AppContainer from 'containers/app'

const store = createStore(
  combineReducers({
    resultsList: ResultsListReducer,
    searchField: SearchFieldReducer
  }),
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppContainer />
    </div>
  </Provider>,
  document.getElementById('app')
)
