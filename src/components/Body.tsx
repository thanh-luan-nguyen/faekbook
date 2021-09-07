import styled from 'styled-components'
import ThemeContext from '../utils/Context'
import { themes } from '../utils/themes'
import globalValues from '../styles/globalValues'
import { useEffect, useContext } from 'react'
import Authen from '../firebase'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import ProfilePage from './ProfilePage'

const Body: React.FC<any> = () => {
  useEffect(() => {
    // Authen.signUp('consutoraku@gmail.com', 'thanhLuan123')
    // Authen.signUp('thanhluannguyenxyz@gmail.com', 'iwiwlkiwljoo')
    // Authen.getUserData('HuICL90OPLUfmvXJHE6L6bwSyFi2')
    // Authen.getUserData('thanhluannguyenxyz@gmail.com')
    // Authen.signIn('thanhluannguyenxyz@gmail.com', 'iwiwlkiwljoo')
    // Authen.signOut()
  }, [])

  const theme = useContext(ThemeContext).isDarkTheme
    ? themes.dark
    : themes.light

  return (
    <Wrapper theme={theme}>
      <Route exact path='/faekbook/' component={MainPage} />
      <Route exact path='/faekbook/profile' component={ProfilePage} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  /* vp height - nav height - nav border bottom */
  height: calc(100vh - ${globalValues.navbar_height} - 1px);
  background: ${props => props.theme.body};
`

export default Body
