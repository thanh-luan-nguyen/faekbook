import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../utils/Context'
import { themes } from '../utils/themes'

const MainPage: React.FC<any> = () => {
  const value = useContext(Context)
  const theme = value.isDarkTheme ? themes.dark : themes.light
  return <Wrapper theme={theme}>MAIN PAGE</Wrapper>
}

const Wrapper = styled.div`
  color: ${props => props.theme.font};
`

export default MainPage
