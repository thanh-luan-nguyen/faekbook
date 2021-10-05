import React, { useContext } from 'react'
import styled from 'styled-components'
import Context from './Context'
import { themes } from './themes'

const ShowMoreButton: React.FC<{ addMorePosts: any }> = ({ addMorePosts }) => {
  const { toggleState } = useContext(Context)
  return (
    <StyledButton
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      onClick={addMorePosts}
    >
      Show More
    </StyledButton>
  )
}

const StyledButton = styled('button')<{ isDarkTheme: number }>`
  background-color: ${p => p.theme.main_bgclr};
  color: ${p => p.theme.font};
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  align-self: center;
  :hover {
    cursor: pointer;
    background-color: ${p => (p.isDarkTheme ? '#525252ac' : '#ebebebae')};
  }
`

export default ShowMoreButton
