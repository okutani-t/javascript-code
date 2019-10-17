import { combineReducers } from 'redux'
import todos from './todos'
import inputText from './inputText'

const todoApp = combineReducers({ todos, inputText })

export default todoApp
