import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo } from './actions'
import App from './components/App'

const store = createStore(todoApp)

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
