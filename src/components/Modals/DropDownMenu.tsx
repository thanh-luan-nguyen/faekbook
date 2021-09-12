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
import { useHistory } from 'react-router'

const DropDownMenu: React.FC<any> = () => {
  const { toggleState, isSignedIn, dispatchToggle, dispatchDimBgModal } =
    useContext(Context)
  const history = useHistory()

  const returnToHomepage = () => {
    history.push('/faekbook/')
  }

  const avatar = (
    <img src={isSignedIn ? myAvatar : defaultAvatar} alt='avatar' />
  )

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isSignedIn={isSignedIn ? 1 : 0}
      onClick={e => e.stopPropagation()}
    >
      <Link
        to='/faekbook/profile'
        onClick={() =>
          isSignedIn && dispatchToggle({ type: 'TOGGLE_DROP_DOWN_MENU' })
        }
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
          dispatchToggle({ type: 'TOGGLE_DARK_THEME' })
          dispatchToggle({ type: 'TOGGLE_DROP_DOWN_MENU' })
        }}
      >
        <div className='icon'>
          {toggleState.isDarkTheme ? <FaSun /> : <FaMoon />}
        </div>
        Change to {toggleState.isDarkTheme ? 'Light' : 'Dark'} theme
      </div>

      <div
        className='log-in-out'
        onClick={() => {
          dispatchToggle({ type: 'TOGGLE_DROP_DOWN_MENU' })
          isSignedIn
            ? (() => {
                Authen.signOut()
                returnToHomepage()
              })()
            : dispatchDimBgModal({ type: 'LOG_IN' })
        }}
      >
        <div className='icon'>{isSignedIn ? <GoSignOut /> : <GoSignIn />}</div>
        Log {isSignedIn ? 'Out' : 'In'}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{ isSignedIn: number }>`
  background: ${p => p.theme.main_bgclr};
  width: 30rem;
  position: absolute;
  border-radius: ${globalValues.dropdown_menu_bdr_rds};
  right: 1rem;
  top: 5rem;
  box-shadow: ${p => p.theme.bxShdw};
  padding: 1rem;
  z-index: 100;
  /* profile, theme-toggler and log-in-out */
  a > .profile,
  .theme-toggler,
  .log-in-out {
    display: flex;
    cursor: pointer;
    border-radius: ${globalValues.dropdown_menu_bdr_rds};
    padding: 0.5rem;
    column-gap: 1rem;
    &:hover {
      background-color: ${p => p.theme.hover};
    }
  }
  /* profile */
  a {
    text-decoration: none;
    pointer-events: ${p => (p.isSignedIn ? 'auto' : 'none')};
    .profile {
      opacity: ${p => (p.isSignedIn ? '100%' : '30%')};
      img {
        border-radius: 50%;
        height: 5rem;
        background: ${p => p.theme.theme_toggler_bgclr};
      }
      .name {
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        span:first-of-type {
          font-size: 1.3rem;
          font-weight: 600;
          color: ${p => p.theme.font};
        }
        span:last-of-type {
          font-size: 1.1375rem;
          color: ${p => p.theme.font_lighter};
        }
      }
    }
  }
  .divider {
    margin-block: 0.5rem;
    height: 2px;
    width: 100%;
    background: ${p => p.theme.divider_clr};
  }
  /* theme-toggler and log-in-out */
  .theme-toggler,
  .log-in-out {
    align-items: center;
    color: ${p => p.theme.font};
    font-weight: 700;
    .icon {
      height: ${globalValues.navbar_elements_height};
      width: ${globalValues.navbar_elements_height};
      border-radius: 50%;
      font-size: 2rem;
      background: ${p => p.theme.theme_toggler_bgclr};
      fill: ${p => p.theme.icon_color};
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
        left: ${p => (p.isSignedIn ? '0.7rem' : '0.5rem')};
      }
    }
  }
`

export default DropDownMenu
