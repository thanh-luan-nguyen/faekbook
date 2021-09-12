import styled from 'styled-components'
import ThemeContext from '../../utils/Context'
import { themes } from '../../utils/themes'
import globalValues from '../../styles/globalValues'
import { useContext } from 'react'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import ProfilePage from './ProfilePage'

const Body: React.FC<any> = () => {
  const { toggleState } = useContext(ThemeContext)

  return (
    <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      <Route exact path='/faekbook/' component={MainPage} />
      <Route exact path='/faekbook/profile' component={ProfilePage} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  /* vp height - nav height - nav border bottom */
  height: calc(100vh - ${globalValues.navbar_height} - 1px);
  background: ${p => p.theme.body};
`

export default Body
