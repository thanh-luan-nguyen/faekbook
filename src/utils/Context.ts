import { createContext } from 'react'

interface ContextProps {
  isDarkTheme: boolean
  handleToggleTheme: any

  menuVisibility: boolean
  handleToggleMenuVisibility: any

  isSignedIn: boolean
  handleSignIn: any
  handleSignOut: any
}

const Context = createContext({} as ContextProps)

export default Context
