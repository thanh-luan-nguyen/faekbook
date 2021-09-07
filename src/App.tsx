import styled from 'styled-components'
import Body from './components/Body'
import Navbar from './components/Navbar'
import { useReducer } from 'react'
import {
  toggleThemeReducer,
  toggleMenuVisibilityReducer,
  signInOutReducer,
} from './reducers/reducers'
import Context from './utils/Context'
import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC<any> = () => {
  const [stateTheme, dispatchTheme] = useReducer(toggleThemeReducer, {
    isDarkTheme: false,
  })
  const handleToggleTheme = () => {
    dispatchTheme({ type: 'TOGGLE_THEME' })
  }

  const [stateMenuVisibility, dispatchMenuVisibility] = useReducer(
    toggleMenuVisibilityReducer,
    { menuVisibility: false }
  )
  const handleToggleMenuVisibility = () => {
    dispatchMenuVisibility({ type: 'TOGGLE_MENU_VISIBILITY' })
  }

  const [stateIsSignedIn, dispatchSignInOut] = useReducer(signInOutReducer, {
    isSignedIn: false,
  })
  const handleSignIn = () => {
    dispatchSignInOut({ type: 'SIGN_IN' })
  }
  const handleSignOut = () => {
    dispatchSignInOut({ type: 'SIGN_OUT' })
  }

  return (
    <Context.Provider
      value={{
        isDarkTheme: stateTheme.isDarkTheme,
        handleToggleTheme: handleToggleTheme,
        menuVisibility: stateMenuVisibility.menuVisibility,
        handleToggleMenuVisibility: handleToggleMenuVisibility,
        isSignedIn: stateIsSignedIn.isSignedIn,
        handleSignIn: handleSignIn,
        handleSignOut: handleSignOut,
      }}
    >
      <Router>
        <Wrapper
          onClick={() => {
            stateMenuVisibility.menuVisibility === true &&
              handleToggleMenuVisibility()
          }}
        >
          <Navbar />
          <Body />
        </Wrapper>
      </Router>
    </Context.Provider>
  )
}

const Wrapper = styled.div``

export default App
