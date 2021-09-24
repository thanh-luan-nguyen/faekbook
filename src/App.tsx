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
import { Hiep, Luan, Long } from './types/interface'
import { auth, Authen, db, DB } from './firebase'
import { getUnixTime } from 'date-fns'
import { onAuthStateChanged } from '@firebase/auth'
import { collection, doc, getDoc, getDocs } from '@firebase/firestore'

const App: React.FC<any> = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false)
  const [currentUserInfo, setCurrentUserInfo] = useState<any>(null)
  const [toggleState, dispatchToggle] = useReducer(toggleReducer, {
    isDarkTheme: false,
    dropDownMenuIsVisible: false,
  })

  const [allPosts, setPosts] = useState<any>(null)

  useEffect(() => {
    ;(async () => {})()
    onAuthStateChanged(auth, async user => {
      if (user) {
        // console.log(`onSignIn. UID: ${user.uid}, email: ${user.email}`)
        // set sign-in state
        setIsUserSignedIn(true)
        getDoc(doc(db, 'users', user.uid)).then(userSnap => {
          // get current user specific info
          const currentUserInfo = userSnap.data()
          setCurrentUserInfo(currentUserInfo)

          DB.getPosts().then(allPosts => {
            allPosts.reverse()
            setPosts(allPosts)
          })

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
  }, [])

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

  // const [currentUserEmail, setCurrentEmail] = useState<any>()
  // useEffect(() => {
  //   const email = Authen.getUserEmail()
  //   if (email) {
  //     setCurrentEmail(email)
  //   }
  // }, [])
  // const [currentUserInfoState, setCurrentUserInfoState] = useState<any>(null)
  // useEffect(() => {
  //   if (currentUserEmail) {
  //     DB.getUser(currentUserEmail).then(currentUser => {
  //       setCurrentUserInfoState(currentUser)
  //     })
  //   } else setCurrentUserInfoState(null)
  // }, [])
  // useEffect(() => {
  //   currentUserInfoState?.is_dark_theme
  //     ? dispatchToggle({ type: 'SET_TO_DARK_THEME' })
  //     : dispatchToggle({ type: 'SET_TO_LIGHT_THEME' })
  // }, [])

  // useEffect(() => {
  //   currentUserEmail &&
  //     isSignedIn &&
  //     DB.updateUserInfo(currentUserEmail, {
  //       is_dark_theme: toggleState.isDarkTheme,
  //     })
  // }, [toggleState])

  // const handleSignIn = (email: string, password: string) => {
  //   Authen.signIn({ email, password }, () => {
  //     setCurrentEmail(email)
  //     currentUserInfoState?.is_dark_theme
  //       ? dispatchToggle({ type: 'SET_TO_DARK_THEME' })
  //       : dispatchToggle({ type: 'SET_TO_LIGHT_THEME' })
  //     // dispatchSignInOut({ type: 'SIGN_IN' })
  //     dispatchDimBgModal({ type: 'NONE' })
  //   })
  // }

  // const handleSignOut = () => {
  //   Authen.signOut(() => setCurrentUserInfoState(null))
  //   // dispatchSignInOut({ type: 'SIGN_OUT' })
  //   // dispatchToggle({ type: 'SET_TO_LIGHT_THEME' })
  // }

  useEffect(() => {
    // DB.updateUserInfo(currentUserEmail, { theme: 'light' })
    // DB.getPosts(true, currentUser)
    // DB.getPosts()
    // for (let p of posts) {
    //   DB.setPost(getUnixTime(p.date).toString(), p)
    // }
    // DB.setUser('KyZEVL64zbZqU3H4CG7zzx0tcHk2', Luan)
    // DB.setUser('9szNArJnruN0LzqeT2iuzL8qgHl1', Long)
    // DB.setUser('jOChZLcqLSh05KiOFjPku0LSXBp1', Hiep)
    // Authen.signUp('consutoraku@gmail.com', 'thanhLuan123')
    // Authen.signUp('thanhluannguyenxyz@gmail.com', 'iwiwlkiwljnpm startoo')
    // Authen.getUserData('HuICL90OPLUfmvXJHE6L6bwSyFi2')
    // Authen.getUserData('thanhluannguyenxyz@gmail.com')
    // Authen.signIn('hiep@gmail.com', 'hiephiep')
    // Authen.signOut()
  }, [])

  return (
    <Context.Provider
      value={{
        allPosts,
        setPosts,
        isUserSignedIn,
        currentUserInfo,
        toggleState,
        dispatchToggle,
        dimBgModal,
        dispatchDimBgModal,
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
