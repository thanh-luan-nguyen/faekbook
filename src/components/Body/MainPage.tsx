import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'

const MainPage: React.FC<any> = () => {
  const { isDarkTheme } = useContext(Context)
  return (
    <StyledDiv theme={isDarkTheme ? themes.dark : themes.light}>
      Main Page
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${props => props.theme.font};
`

export default MainPage
