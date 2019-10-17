import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ inputText, onInputChange, onAddTodoClick }) => (
  <div>
    <input
      value={inputText}
      onChange={(e) => onInputChange(e.target.value)}
    />
    <button onClick={() => onAddTodoClick(inputText)}>
      Add Todo
    </button>
  </div>
)

AddTodo.propTypes = {
  inputText: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onAddTodoClick: PropTypes.func.isRequired
}

export default AddTodo
