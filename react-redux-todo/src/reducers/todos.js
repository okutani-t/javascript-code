const isValidText = (text) => {
  if (text === '' || text === ' ' || text === '　') {
    return false
  }
  return true
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (!isValidText(action.text)) {
        return state
      }

      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
