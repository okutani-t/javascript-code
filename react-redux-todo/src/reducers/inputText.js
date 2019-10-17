const inputText = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text
    case 'REMOVE_TEXT':
      return ''
    default:
      return state
  }
}

export default inputText
