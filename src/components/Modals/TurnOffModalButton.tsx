import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'

export default function TurnOffModalButton() {
  const { handleNeitherModal } = useContext(Context)
  return (
    <StyledSpan id='turn-off-modal' onClick={handleTurnOffModal}>
      +
    </StyledSpan>
  )
}

const StyledSpan = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 3rem;
  transform: rotate(45deg);
  &:hover {
    cursor: pointer;
  }
`
