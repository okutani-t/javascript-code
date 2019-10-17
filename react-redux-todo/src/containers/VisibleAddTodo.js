import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo, removeText, changeText } from '../actions'

const mapStateToProps = (state) => {
  return { inputText: state.inputText }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (inputText) => {
      dispatch(addTodo(inputText))
      dispatch(removeText())
    },
    onInputChange: (inputText) => {
      dispatch(changeText(inputText))
    }
  }
}

const VisibleAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default VisibleAddTodo
