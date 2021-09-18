import { createContext } from 'react'

interface ContextInterface {
  currentEmail: any
  setCurrentEmail: any
  currentUserInfoState: any
  setCurrentUserInfoState: any
  handleSignIn: any
  toggleState: any
  dispatchToggle: any
  isSignedIn: any
  dispatchSignInOut: any
  dimBgModal: any
  dispatchDimBgModal: any
  handleSignOut: any
}

const Context = createContext({} as ContextInterface)

export default Context
