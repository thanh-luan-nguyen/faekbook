import { useContext } from 'react'
import styled from 'styled-components'
import Context from './Context'
import { themes } from './themes'

export default function TurnOffModalButton() {
  const { toggleState, dispatchDimBgModal } = useContext(Context)
  return (
    <StyledSpan
      id='turn-off-modal'
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      onClick={() => dispatchDimBgModal({ type: 'NONE' })}
    >
      +
    </StyledSpan>
  )
}

const StyledSpan = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.75rem;
  font-size: 3.5rem;
  transform: rotate(45deg);
  font-weight: initial;
  color: ${p => p.theme.font};
  :hover {
    cursor: pointer;
  }
`
