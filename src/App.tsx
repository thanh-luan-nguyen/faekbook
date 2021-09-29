import styled, { css } from 'styled-components'
// import Body from './components/Body/Body'
import Navbar from './components/Navbar'
import { useEffect, useReducer, useState } from 'react'
import { toggleReducer, authenModalReducer } from './reducers/reducers'
import Context from './utils/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogInModal from './components/Modals/LogInModal'
import SignUpModal from './components/Modals/SignUpModal'
import { themes } from './utils/themes'
import MainPage from './components/Body/MainPage'
import ProfilePage from './components/Body/ProfilePage'
import DropDownMenu from './components/Modals/DropDownMenu'
import CreatePost from './components/Modals/CreatePost'
import { auth, db, Storage } from './firebaseConfig'
import { onAuthStateChanged } from '@firebase/auth'
import { doc, getDoc } from '@firebase/firestore'

const App: React.FC<any> = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false)
  const [currentUserInfo, setCurrentUserInfo] = useState<any>(null)
  const [CUAvatarURL, setAvatarURL] = useState<any>(null)
  const [toggleState, dispatchToggle] = useReducer(toggleReducer, {
    isDarkTheme: false,
    dropDownMenuIsVisible: false,
  })
  const [dimBgModal, dispatchDimBgModal] = useReducer(authenModalReducer, {
    action: 'close modals',
  })

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        // set sign-in state
        setIsUserSignedIn(true)
        getDoc(doc(db, 'users', user.uid)).then(userSnap => {
          // get current user specific info
          const currentUserInfo = userSnap.data()
          setCurrentUserInfo(currentUserInfo)
          // set theme
          currentUserInfo?.is_dark_theme
            ? dispatchToggle({ type: 'DARK_THEME' })
            : dispatchToggle({ type: 'LIGHT_THEME' })
        })
      } else {
        setIsUserSignedIn(false)
        setCurrentUserInfo(null)
        dispatchToggle({ type: 'LIGHT_THEME' })
      }
    })
    if (currentUserInfo) {
      ;(async () => {
        const uid = currentUserInfo?.uid
        Storage.setPhotosURL(uid, setAvatarURL)
      })()
    }
  }, [currentUserInfo])


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

  return (
    <Context.Provider
      value={{
        isUserSignedIn,
        currentUserInfo,
        toggleState,
        dispatchToggle,
        dimBgModal,
        dispatchDimBgModal,
        CUAvatarURL,
        setAvatarURL,
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
            <Route exact path='/faekbook/:userID' component={ProfilePage} />
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
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    border-radius: 10px;
    box-shadow: ${p => p.theme.bxShdw};
  }
`

export default App
