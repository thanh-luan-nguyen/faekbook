import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import WhatsOnYourMind from './WhatsOnYourMind'

const MainPage: React.FC<any> = () => {
  const { toggleState } = useContext(Context)
  return (
    <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      <WhatsOnYourMind />
      {/* <Post /> */}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${p => p.theme.font};
`

export default MainPage
