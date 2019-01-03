import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk';
import multi from 'redux-multi'

import reducer from './main/reducer'
import App from './main/app'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={applyMiddleware(thunk, promise, multi)(createStore)(reducer, devTools)}>
    <App/>
  </Provider>,
  document.getElementById('app'),
)
