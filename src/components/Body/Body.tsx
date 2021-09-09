import styled from 'styled-components'
import ThemeContext from '../../utils/Context'
import { themes } from '../../utils/themes'
import globalValues from '../../styles/globalValues'
import { useEffect, useContext } from 'react'
import Authen from '../../firebase'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import ProfilePage from './ProfilePage'

const Body: React.FC<any> = () => {
  const theme = useContext(ThemeContext).isDarkTheme
    ? themes.dark
    : themes.light

  return (
    <StyledDiv theme={theme}>
      <Route exact path='/faekbook/' component={MainPage} />
      <Route exact path='/faekbook/profile' component={ProfilePage} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  /* vp height - nav height - nav border bottom */
  height: calc(100vh - ${globalValues.navbar_height} - 1px);
  background: ${props => props.theme.body};
`

export default Body
