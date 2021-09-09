import { useContext } from 'react'
import Context from '../../utils/Context'
import { FaMoon, FaSun } from 'react-icons/fa'
import { GoSignOut, GoSignIn } from 'react-icons/go'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import { Link } from 'react-router-dom'
import { themes } from '../../utils/themes'
import defaultAvatar from '../../utils/images/default_user.png'
import myAvatar from '../../utils/images/picture_of_myself.jpg'
import Authen from '../../firebase'
const DropDownMenu: React.FC<any> = () => {
  const {
    isDarkTheme,
    isSignedIn,
    handleToggleTheme,
    handleToggleMenuVisibility,
    handleLogInModal,
  } = useContext(Context)

  const avatar = (
    <img src={isSignedIn ? myAvatar : defaultAvatar} alt='avatar' />
  )

  return (
    <StyledDiv
      theme={isDarkTheme ? themes.dark : themes.light}
      isSignedIn={isSignedIn ? 1 : 0}
      onClick={e => e.stopPropagation()}
    >
      <Link
        to='/faekbook/profile'
        style={{
          textDecoration: 'none',
          pointerEvents: `${isDarkTheme ? 'auto' : 'none'}`,
        }}
        onClick={() => isDarkTheme && handleToggleMenuVisibility()}
      >
        <div className='profile'>
          {avatar}
          <div className='name'>
            <span>{isDarkTheme ? 'Nguyen Thanh Luan' : 'User'}</span>
            <span>{isDarkTheme ? 'See your profile' : 'Please log in'}</span>
          </div>
        </div>
      </Link>

      <div className='divider' />

      <div
        className='theme-toggler'
        onClick={() => {
          handleToggleTheme()
          handleToggleMenuVisibility()
        }}
      >
        <div className='icon'>{isDarkTheme ? <FaSun /> : <FaMoon />}</div>
        Change to {isDarkTheme ? 'Light' : 'Dark'} theme
      </div>

      <div
        className='log-in-out'
        onClick={() => {
          handleToggleMenuVisibility()
          isDarkTheme ? Authen.signOut() : handleLogInModal()
        }}
      >
        <div className='icon'>{isDarkTheme ? <GoSignOut /> : <GoSignIn />}</div>
        Log {isDarkTheme ? 'Out' : 'In'}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{ isSignedIn: number }>`
  background: ${props => props.theme.navbar};
  width: 30rem;
  position: absolute;
  border-radius: ${globalValues.dropdown_menu_bdr_rds};
  right: 1rem;
  top: 5rem;
  box-shadow: ${globalValues.bxShdw};
  padding: 1rem;
  /* profile, theme-toggler and log-in-out */
  .profile,
  .theme-toggler,
  .log-in-out {
    display: flex;
    cursor: pointer;
    border-radius: ${globalValues.dropdown_menu_bdr_rds};
    padding: 0.5rem;
    column-gap: 1rem;
    &:hover {
      background-color: ${props => props.theme.hover};
    }
  }
  /* profile */
  .profile {
    opacity: ${props => (props.isSignedIn ? '100%' : '30%')};
    img {
      border-radius: 50%;
      height: 5rem;
      background: ${props => props.theme.theme_toggler_bgclr};
    }
    .name {
      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
      span:first-of-type {
        font-size: 1.3rem;
        font-weight: 600;
        color: ${props => props.theme.font};
      }
      span:last-of-type {
        font-size: 1.1375rem;
        color: ${props => props.theme.font_lighter};
      }
    }
  }
  .divider {
    margin-block: 0.5rem;
    height: 2px;
    width: 100%;
    background: ${props => props.theme.divider_clr};
  }
  /* theme-toggler and log-in-out */
  .theme-toggler,
  .log-in-out {
    align-items: center;
    color: ${props => props.theme.font};
    font-weight: 700;
    .icon {
      height: ${globalValues.navbar_elements_height};
      width: ${globalValues.navbar_elements_height};
      border-radius: 50%;
      font-size: 2rem;
      background: ${props => props.theme.theme_toggler_bgclr};
      fill: ${props => props.theme.icon_color};
    }
  }
  .theme-toggler {
    .icon {
      display: grid;
      place-items: center;
    }
  }
  .log-in-out {
    .icon {
      position: relative;
      svg {
        position: absolute;
        top: 0.7rem;
        left: ${props => (props.isSignedIn ? '0.7rem' : '0.5rem')};
      }
    }
  }
`

export default DropDownMenu
