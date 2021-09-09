import { createContext } from 'react'

interface ContextProps {
  isDarkTheme: boolean
  handleToggleTheme: () => void
  menuVisibility: boolean
  handleToggleMenuVisibility: () => void
  isSignedIn: boolean
  handleSignIn: () => void
  handleSignOut: () => void
  // logInOrSignUp: string
  handleLogInModal: () => void
  handleSignUpModal: () => void
  handleNeitherModal: () => void
}

const Context = createContext({} as ContextProps)

export default Context
