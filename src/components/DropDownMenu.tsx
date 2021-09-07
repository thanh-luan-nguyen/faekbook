import { useContext } from 'react'
import Context from '../utils/Context'
import { FaMoon, FaSun } from 'react-icons/fa'
import { GoSignOut, GoSignIn } from 'react-icons/go'
import styled from 'styled-components'
import globalValues from '../styles/globalValues'
import { Link } from 'react-router-dom'
import { themes } from '../utils/themes'
import defaultAvatar from '../utils/images/default_user.png'
import myAvatar from '../utils/images/picture_of_myself.jpg'

const DropDownMenu: React.FC<any> = () => {
  const value = useContext(Context)

  const theme = value.isDarkTheme ? themes.dark : themes.light
  const handleToggleTheme = value.handleToggleTheme

  const handleToggleMenuVisibility = value.handleToggleMenuVisibility

  const isSignedIn = value.isSignedIn

  const avatar = (
    <img src={isSignedIn ? myAvatar : defaultAvatar} alt='avatar' />
  )

  console.log(defaultAvatar)
  return (
    <Wrapper theme={theme} isSignedIn={isSignedIn ? 1 : 0}>
      <Link
        to='/faekbook/profile'
        style={{ textDecoration: 'none' }}
        onClick={e => {
          e.stopPropagation()
          handleToggleMenuVisibility()
        }}
      >
        <div className='profile'>
          {avatar}
          <div className='name'>
            <span>{isSignedIn ? 'Nguyen Thanh Luan' : 'User'}</span>
            <span>{isSignedIn ? 'See your profile' : 'Please log in'}</span>
          </div>
        </div>
      </Link>

      <div className='divider' />

      <div
        className='theme-toggler'
        onClick={() => {
          handleToggleTheme()
        }}
      >
        <div className='icon'>
          {theme.type === 'dark' ? <FaSun /> : <FaMoon />}
        </div>
        Change to {theme.type === 'dark' ? 'Light' : 'Dark'} theme
      </div>

      <div className='log-in-out'>
        <div className='icon'>{isSignedIn ? <GoSignOut /> : <GoSignIn />}</div>
        Log {isSignedIn ? 'Out' : 'In'}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')<{ isSignedIn: number }>`
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
