export const toggleThemeReducer = (
  state = { isDarkTheme: false },
  action: any
) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { isDarkTheme: !state.isDarkTheme }
    default:
      return state
  }
}

export const toggleMenuVisibilityReducer = (
  state = { menuVisibility: false },
  action: any
) => {
  switch (action.type) {
    case 'TOGGLE_MENU_VISIBILITY':
      return { menuVisibility: !state.menuVisibility }
    default:
      return state
  }
}

export const signInOutReducer = (
  state = { isSignedIn: false },
  action: any
) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { isSignedIn: true }
    case 'SIGN_OUT':
      return { isSignedIn: false }
    default:
      return state
  }
}
