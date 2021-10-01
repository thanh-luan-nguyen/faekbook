export const toggleReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'DARK_THEME':
      return { ...state, isDarkTheme: true }
    case 'LIGHT_THEME':
      return { ...state, isDarkTheme: false }
    case 'TOGGLE_THEME':
      return { ...state, isDarkTheme: !state.isDarkTheme }
    case 'TOGGLE_DROP_DOWN_MENU':
      return { ...state, dropDownMenuIsVisible: !state.dropDownMenuIsVisible }
    default:
      return state
  }
}

export const isSignedInReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true
    case 'SIGN_OUT':
      return false
    default:
      return state
  }
}

export const authenModalReducer = (
  state = { action: 'close modals' },
  action: any
) => {
  switch (action.type) {
    case 'LOG_IN':
      return { action: 'show login modal' }
    case 'SIGN_UP':
      return { action: 'show signup modal' }
    case 'CREATE_POST':
      return { action: 'show create-post modal' }
    case 'EDIT_POST':
      return { action: 'show edit-post' }
    case 'NONE':
      return { action: 'close modals' }
    default:
      return state
  }
}
