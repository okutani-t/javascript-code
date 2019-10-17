import { combineReducers } from 'redux'
import todos from './todos'
import inputText from './inputText'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  inputText,
  visibilityFilter
})

export default todoApp
