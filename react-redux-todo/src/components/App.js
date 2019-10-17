import React from 'react'
import VisibleAddTodo from '../containers/VisibleAddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = () => (
  <div>
    <main>
      <h1>React Redux Todo App</h1>
      <VisibleAddTodo />
      <VisibleTodoList />
    </main>
    <Footer />
  </div>
)

export default App
