import styled, { css } from 'styled-components'
// import Body from './components/Body/Body'
import Navbar from './components/Navbar'
import { useEffect, useReducer, useState } from 'react'
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
import DropDownMenu from './components/Modals/DropDownMenu'
import CreatePost from './components/Modals/CreatePost'
import { Hiep, Luan, Long, posts } from './types/interface'
import { Authen, DB } from './firebase'
import { getUnixTime } from 'date-fns'

const App: React.FC<any> = () => {
  const [toggleState, dispatchToggle] = useReducer(toggleReducer, {
    isDarkTheme: false,
    dropDownMenuIsVisible: false,
  })

  const [isSignedIn, dispatchSignInOut] = useReducer(isSignedInReducer, false)

  const [dimBgModal, dispatchDimBgModal] = useReducer(authenModalReducer, {
    action: 'close modals',
  })

  const renderModal = (action: string) => {
    switch (action) {
      case 'show login modal':
        return <LogInModal />
      case 'show signup modal':
        return <SignUpModal />
      case 'show create-post modal':
        return <CreatePost />
      case 'close modals':
        return
    }
  }

  const [currentEmail, setCurrentEmail] = useState<any>()
  useEffect(() => {
    const email = Authen.getUserEmail()
    if (email) {
      setCurrentEmail(email)
    }
  })
  const [currentUserInfoState, setCurrentUserInfoState] = useState<any>()
  useEffect(() => {
    if (currentEmail) {
      DB.getUser(currentEmail).then(currentUser =>
        setCurrentUserInfoState(currentUser)
      )
    } else setCurrentUserInfoState(null)
  }, [currentEmail])

  const handleSignIn = (email: string, password: string) => {
    Authen.signIn(email, password)
    setCurrentEmail(email)
    dispatchSignInOut({ type: 'SIGN_IN' })
    dispatchDimBgModal({ type: 'NONE' })
  }

  const handleSignOut = () => {
    Authen.signOut()
    Authen.setCurrentUserStateInfoToNull(() => {
      setCurrentUserInfoState(null)
    })
  }

  useEffect(() => {
    // for (let post of posts) {
    //   DB.setPost(getUnixTime(post.date).toString(), post)
    // }
    // DB.getPosts(true, currentUser)
    // DB.getPosts()
    // DB.setUser('long@gmail.com', Long)
    // DB.setUser('hiep@gmail.com', Hiep)
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
        currentEmail,
        setCurrentEmail,
        currentUserInfoState,
        setCurrentUserInfoState,
        handleSignIn,
        toggleState,
        dispatchToggle,
        isSignedIn,
        dispatchSignInOut,
        dimBgModal,
        dispatchDimBgModal,
        handleSignOut,
      }}
    >
      <Router>
        <StyledDiv
          theme={toggleState.isDarkTheme === true ? themes.dark : themes.light}
          authenType={dimBgModal.action}
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
          <div className='dim-bg-modal'>{renderModal(dimBgModal.action)}</div>
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
      (p.authenType !== 'close modals' || p.toggleState.createPostIsVisible) &&
      Screen}
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
