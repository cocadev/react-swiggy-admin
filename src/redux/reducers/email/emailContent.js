const emailContent = (state = 1, action) => {  
    switch (action.type) {
      case 'OPEN_EMAIL':
        return action.id
      default:
        return state
    }
  }
  
  export default emailContent