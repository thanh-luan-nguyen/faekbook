import { useContext } from 'react'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import TurnOffModalButton from './TurnOffModalButton'

export default function SignUpModal() {
  const { toggleState, dispatchDimBgModal } = useContext(Context)
  return (
    <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      <TurnOffModalButton />
      <div id='top'>
        <div>Sign Up</div>
        <div>It's quick and easy</div>
      </div>
      <div className='divider'></div>
      <div id='middle'>
        <div className='full-name'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email'></input>
        <input type='password' placeholder='New password' />
        <button className='sign-up'>Sign Up</button>
      </div>
      <div className='divider'></div>
      <div id='bottom'>
        <span>Already have an account?</span>
        <button onClick={dispatchDimBgModal({ type: 'LOG_IN' })}>Log In</button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 45rem;
  max-width: 100vw;
  #top,
  #middle,
  #bottom {
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    row-gap: 1rem;
    align-items: center;
    & button {
      ${globalValues.ButtonCSS};
    }
  }
  #top {
    align-items: flex-start;
    div:first-of-type {
      font-weight: 600;
      font-size: 3rem;
      color: #1c1e21;
    }
    div:last-of-type {
      color: #6d747c;
      font-size: 1.5rem;
    }
  }
  #middle {
    font-size: 1.5rem;
    & input {
      ${globalValues.InputCSS}
    }
    .full-name {
      width: 100%;
      display: flex;
      column-gap: 0.75rem;
    }
    button {
      margin-top: 1.5rem;
    }
  }
  #bottom {
    span {
      font-size: 1.25rem;
    }
    button {
      font-size: 1.5rem;
      width: 50%;
      background-color: #1877f2;
    }
  }
  .divider {
    background-color: #dddfe2;
    height: 1px;
    width: 100%;
  }
`
