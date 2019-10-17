import React from 'react'
import VisibleAddTodo from '../containers/VisibleAddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <h1>React Redux Todo App</h1>
    <VisibleAddTodo />
    <VisibleTodoList />
  </div>
)

export default App
