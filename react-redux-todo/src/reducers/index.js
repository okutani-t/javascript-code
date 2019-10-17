import { combineReducers } from 'redux'
import todos from './todos'
import inputText from './inputText'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  inputText,
  visibilityFilter
})
