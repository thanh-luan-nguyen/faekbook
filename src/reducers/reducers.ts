export const toggleThemeReducer = (state = { state: false }, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { state: !state.state }
    default:
      return state
  }
}

export const toggleMenuVisibilityReducer = (
  state = { state: false },
  action: any
) => {
  switch (action.type) {
    case 'TOGGLE_MENU_VISIBILITY':
      return { state: !state.state }
    default:
      return state
  }
}

export const isSignedInReducer = (state = { state: false }, action: any) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { state: true }
    case 'SIGN_OUT':
      return { state: false }
    default:
      return state
  }
}

export const authenModalReducer = (state = { state: 'none' }, action: any) => {
  switch (action.type) {
    case 'LOG_IN':
      return { state: 'logIn' }
    case 'SIGN_UP':
      return { state: 'signUp' }
    case 'NONE':
      return { state: 'none' }
    default:
      return state
  }
}
