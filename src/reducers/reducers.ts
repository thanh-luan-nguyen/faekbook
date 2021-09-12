const toggleInitialStates = {
  isDarkTheme: false,
  dropDownMenuIsVisible: false,
}

export const toggleReducer = (state = toggleInitialStates, action: any) => {
  switch (action.type) {
    case 'TOGGLE_DARK_THEME':
      return { ...state, isDarkTheme: !state.isDarkTheme }
    case 'TOGGLE_DROP_DOWN_MENU':
      return { ...state, dropDownMenuIsVisible: !state.dropDownMenuIsVisible }
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
    case 'CREATE_POST':
      return { state: 'createPost' }
    case 'NONE':
      return { state: 'none' }
    default:
      return state
  }
}
