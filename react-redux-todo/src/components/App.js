import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <h1>React Redux Todo App</h1>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
