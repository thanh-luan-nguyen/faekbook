import styled, { css } from 'styled-components'
// import Body from './components/Body/Body'
import Navbar from './components/Navbar'
import { useEffect, useReducer } from 'react'
import {
  toggleReducer,
  isSignedInReducer,
  authenModalReducer,
} from './reducers/reducers'
import Context from './utils/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogInModal from './components/Modals/LogInModal'
import SignUpModal from './components/Modals/SignUpModal'
import { themes } from './utils/themes'
import MainPage from './components/Body/MainPage'
import ProfilePage from './components/Body/ProfilePage'
import Authen from './firebase'
import DropDownMenu from './components/Modals/DropDownMenu'
import CreatePost from './components/Modals/CreatePost'

const App: React.FC<any> = () => {
  const [toggleState, dispatchToggle] = useReducer(toggleReducer, {
    isDarkTheme: false,
    dropDownMenuIsVisible: false,
  })

  const [isSignedIn, dispatchSignInOut] = useReducer(isSignedInReducer, {
    state: false,
  })

  const [dimBgModal, dispatchDimBgModal] = useReducer(authenModalReducer, {
    state: 'none',
  })

  const renderModal = (param: string) => {
    switch (param) {
      case 'logIn':
        return <LogInModal />
      case 'signUp':
        return <SignUpModal />
      case 'createPost':
        return <CreatePost />
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
        toggleState: toggleState,
        dispatchToggle: dispatchToggle,
        isSignedIn: isSignedIn.state,
        dispatchSignInOut: dispatchSignInOut,
        dimBgModal: dimBgModal,
        dispatchDimBgModal: dispatchDimBgModal,
        // menuVisibility: toggleState.dropDownMenuIsVisible,
        // handleToggleMenuVisibility: () =>
        // dispatchToggle({ type: 'TOGGLE_DROP_DOWN_MENU' }),
        // handleIsSignedIn: () => dispatchSignInOut({ type: 'SIGN_IN' }),
        // handleIsSignedOut: () => dispatchSignInOut({ type: 'SIGN_OUT' }),
        // handleLogInModal: () => dispatchDimBgModal({ type: 'LOG_IN' }),
        // handleSignUpModal: () => dispatchDimBgModal({ type: 'SIGN_UP' }),
        // handleCreatePostModal: () =>
        //   dispatchDimBgModal({ type: 'CREATE_POST' }),
        // handleTurnOffModal: () => dispatchDimBgModal({ type: 'NONE' }),
      }}
    >
      <Router>
        <StyledDiv
          theme={toggleState.isDarkTheme === true ? themes.dark : themes.light}
          authenType={dimBgModal.state}
          toggleState={toggleState}
          onClick={() =>
            toggleState.dropDownMenuIsVisible &&
            dispatchToggle({ type: 'TOGGLE_DROP_DOWN_MENU' })
          }
        >
          <Navbar />
          <Switch>
            <Route exact path='/faekbook/' component={MainPage} />
            <Route exact path='/faekbook/profile' component={ProfilePage} />
          </Switch>
          {/* modals */}
          <div className='dim-bg-modal'>{renderModal(dimBgModal.state)}</div>
          {toggleState.dropDownMenuIsVisible && <DropDownMenu />}
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
  height: 100vh;
  width: 100%;
  z-index: 100;
`

const StyledDiv = styled('div')<{ authenType: string; toggleState: any }>`
  position: relative;
  background: ${p => p.theme.body};
  min-height: 100vh;
  &::after {
    ${p =>
      (p.authenType !== 'none' || p.toggleState.createPostIsVisible) && Screen}
    background-color: ${p =>
      p.theme.type === 'dark' ? '#00000063' : '#ffffff92'};
  }
  .dim-bg-modal {
    position: fixed;
    background: white;
    border-radius: 10px;
    top: 15rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    border-radius: 10px;
    box-shadow: ${p => p.theme.bxShdw};
  }
`

export default App
