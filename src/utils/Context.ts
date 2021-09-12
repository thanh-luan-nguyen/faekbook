import { createContext } from 'react'

interface ContextInterface {
  toggleState: any
  dispatchToggle: any
  isSignedIn: any
  dispatchSignInOut: any
  dimBgModal: any
  dispatchDimBgModal: any
  // create post
}

const Context = createContext({} as ContextInterface)

export default Context
