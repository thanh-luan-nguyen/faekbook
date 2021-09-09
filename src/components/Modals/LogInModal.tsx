import { useContext } from 'react'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import Context from '../../utils/Context'

export default function LogInModal() {
  const { handleSignUpModal } = useContext(Context)
  return (
    <StyledDiv>
      <div id='top'>
        <div>Welcome Back!</div>
        <input type='text' placeholder='Email or Phone Number' />
        <input type='password' placeholder='Password' />
        <button className='log-in-btn'>Log In</button>
      </div>
      <div className='divider'></div>
      <div id='bottom'>
        <span>New to Faekbook?</span>
        <button className='create-new-acc-btn' onClick={handleSignUpModal}>
          Create New Account
        </button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 40rem;
  max-width: 100vw;
  display: flex;
  flex-flow: column;
  padding: 1.5rem;
  #top,
  #bottom {
    display: flex;
    align-items: center;
    flex-flow: column;
    row-gap: 1.25rem;
    font-size: 1.75rem;
  }
  #top {
    div {
      align-self: flex-start;
      font-weight: 500;
      font-size: 2.25rem;
      color: #1c1e21;
      margin: 0.5rem auto 0.75rem 1rem;
    }
    input {
      ${globalValues.InputCSS}
    }
    .log-in-btn {
      ${globalValues.ButtonCSS}
      width: 100%;
      background-color: #1877f2;
    }
  }
  .divider {
    background-color: #dddfe2;
    height: 1px;
    width: 100%;
    margin-block: 2rem;
  }
  #bottom {
    span {
      font-size: 1.25rem;
    }
    .create-new-acc-btn {
      ${globalValues.ButtonCSS}
      width: 60%;
    }
  }
`
