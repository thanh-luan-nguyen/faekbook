import { useState } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Authen } from '../../firebase'
import globalValues from '../../styles/globalValues'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import TurnOffModalButton from './TurnOffModalButton'

export default function SignUpModal() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const history = useHistory()
  // const returnToHomepage = () => {
  //   history.push('/faekbook/')
  // }
  const {
    handleSignIn,
    toggleState,
    dispatchDimBgModal,
    // setCurrentUserInfoState,
  } = useContext(Context)
  const handleSignUp = () => {
    Authen.signUp(email, password, firstName, lastName)
    handleSignIn(email, password)
    // Authen.handleSignInOutState(
    //   () => handleSignIn(email, password),
    //   () => {
    //     Authen.signOut(() => {
    //       setCurrentUserInfoState(null)
    //     })
    //     returnToHomepage()
    //   }
    // )
  }
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
          <input
            type='text'
            placeholder='First name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
        <input
          type='password'
          placeholder='New password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='sign-up' onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <div className='divider'></div>
      <div id='bottom'>
        <span>Already have an account?</span>
        <button onClick={() => dispatchDimBgModal({ type: 'LOG_IN' })}>
          Log In
        </button>
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
