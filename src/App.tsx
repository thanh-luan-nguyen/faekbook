import styled, { css } from 'styled-components'
// import Body from './components/Body/Body'
import Navbar from './components/Navbar'
import { useEffect, useReducer } from 'react'
import {
  toggleThemeReducer,
  toggleMenuVisibilityReducer,
  authenModalReducer,
  isSignedInReducer,
} from './reducers/reducers'
import Context from './utils/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogInModal from './components/Modals/LogInModal'
import SignUpModal from './components/Modals/SignUpModal'
import { themes } from './utils/themes'
import MainPage from './components/Body/MainPage'
import ProfilePage from './components/Body/ProfilePage'
import Authen from './firebase'
import globalValues from './styles/globalValues'
import TurnOffModalButton from './components/Modals/TurnOffModalButton'

const App: React.FC<any> = () => {
  const [isDarkTheme, dispatchTheme] = useReducer(toggleThemeReducer, {
    state: false,
  })

  const [menuVisibility, dispatchMenuVisibility] = useReducer(
    toggleMenuVisibilityReducer,
    { state: false }
  )

  const [isSignedIn, dispatchSignInOut] = useReducer(isSignedInReducer, {
    state: false,
  })

  const [authenModal, dispatchAuthenModal] = useReducer(authenModalReducer, {
    state: 'none',
  })

  const renderModal = (param: string) => {
    switch (param) {
      case 'logIn':
        return (
          <>
            <TurnOffModalButton />
            <LogInModal />
          </>
        )
      case 'signUp':
        return (
          <>
            <TurnOffModalButton />
            <SignUpModal />
          </>
        )
      case 'none':
        return
    }
  }

  useEffect(() => {
    // Authen.signUp('consutoraku@gmail.com', 'thanhLuan123')
    // Authen.signUp('thanhluannguyenxyz@gmail.com', 'iwiwlkiwljoo')
    // Authen.getUserData('HuICL90OPLUfmvXJHE6L6bwSyFi2')
    // Authen.getUserData('thanhluannguyenxyz@gmail.com')
    // Authen.signIn('thanhluannguyenxyz@gmail.com', 'iwiwlkiwljoo')
    // Authen.signOut()
  }, [])

  return (
    <Context.Provider
      value={{
        isDarkTheme: isDarkTheme.state,
        handleToggleTheme: () => dispatchTheme({ type: 'TOGGLE_THEME' }),
        menuVisibility: menuVisibility.state,
        handleToggleMenuVisibility: () =>
          dispatchMenuVisibility({ type: 'TOGGLE_MENU_VISIBILITY' }),
        isSignedIn: isSignedIn.state,
        handleSignIn: () => dispatchSignInOut({ type: 'SIGN_IN' }),
        handleSignOut: () => dispatchSignInOut({ type: 'SIGN_OUT' }),
        // authentication Modals
        handleLogInModal: () => dispatchAuthenModal({ type: 'LOG_IN' }),
        handleSignUpModal: () => dispatchAuthenModal({ type: 'SIGN_UP' }),
        handleTurnOffModal: () => dispatchAuthenModal({ type: 'NONE' }),
      }}
    >
      <Router>
        <StyledDiv
          theme={isDarkTheme.state === true ? themes.dark : themes.light}
          authenType={authenModal.state}
          onClick={() => {
            menuVisibility.state === true &&
              dispatchMenuVisibility({ type: 'TOGGLE_MENU_VISIBILITY' })
          }}
        >
          <Navbar />
          <Switch>
            <Route exact path='/faekbook/' component={MainPage} />
            <Route exact path='/faekbook/profile' component={ProfilePage} />
          </Switch>
          <div className='authen-modal'>{renderModal(authenModal.state)}</div>
        </StyledDiv>
      </Router>
    </Context.Provider>
  )
}

const Screen = css`
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  /* min-height: inherit; */
  height: inherit;
  width: 100%;
  z-index: 100;
`

const StyledDiv = styled('div')<{ authenType: string }>`
  position: relative;
  background: ${props => props.theme.body};
  height: 100vh;
  &::before {
    ${props => props.authenType !== 'none' && Screen}
    background-color: ${props =>
      props.theme.type === 'light' ? '#ffffff00' : '#ffffffb9'};
  }
  .authen-modal {
    position: absolute;
    background: white;
    box-shadow: ${globalValues.bxShdw};
    border-radius: 10px;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
  }
`

export default App
