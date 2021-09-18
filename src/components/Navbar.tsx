import styled, { keyframes } from 'styled-components'
import globalValues from '../styles/globalValues'
import { FaFacebook } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import Context from '../utils/Context'
import React, { useContext } from 'react'
// import DropDownMenu from './Modals/DropDownMenu'
import { themes } from '../utils/themes'
import { Link } from 'react-router-dom'
import { Authen } from '../firebase'
import { useEffect } from 'react'
import defaultAvatar from '../utils/images/default_user.png'

const Navbar: React.FC<any> = () => {
  const {
    currentUserInfoState,
    toggleState,
    isSignedIn,
    dispatchToggle,
    dispatchSignInOut,
    dispatchDimBgModal,
  } = useContext(Context)

  useEffect(() => {
    Authen.handleSignInOutState(
      () => dispatchSignInOut({ type: 'SIGN_IN' }),
      () => dispatchSignInOut({ type: 'SIGN_OUT' })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const userProfileButton = (
    <Link to='/faekbook/profile'>
      <div className='user-profile-button'>
        <img
          src={
            currentUserInfoState ? currentUserInfoState.avatar : defaultAvatar
          }
          alt='avatar'
        />
        {currentUserInfoState && currentUserInfoState.first_name}
      </div>
    </Link>
  )

  const logInButton = (
    <div
      className='log-in-button'
      onClick={() => dispatchDimBgModal({ type: 'LOG_IN' })}
    >
      Log In
    </div>
  )

  return (
    <StyledNav
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      menuVisibility={toggleState.dropDownMenuIsVisible ? 1 : 0}
    >
      <div className='left'>
        <Link to='/faekbook/'>
          <FaFacebook className='fb-icon' />
        </Link>
        <Link to='/faekbook/'>
          <span className='faekbook'>faekbook</span>
        </Link>
      </div>
      <div className='right'>
        {isSignedIn ? userProfileButton : logInButton}
        <div
          className='toggle-dropdown-menu'
          onClick={e => {
            e.stopPropagation()
            dispatchToggle({ type: 'TOGGLE_DROP_DOWN_MENU' })
          }}
        >
          <MdArrowDropDown />
        </div>
      </div>
      {/* {menuVisibility && <DropDownMenu />} */}
    </StyledNav>
  )
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const StyledNav = styled('nav')<{ menuVisibility: number }>`
  position: sticky;
  top: 0;
  background: ${p => p.theme.main_bgclr};
  height: ${globalValues.navbar_height};
  box-shadow: ${p => p.theme.bxShadw};
  border-bottom: 1px solid ${p => p.theme.nav_btm_brdr_clr};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  z-index: 100;
  .left {
    display: flex;
    align-items: center;
    column-gap: ${globalValues.navbar_column_gap};
    font-size: 2rem;
    font-weight: 700;
    a {
      text-decoration: none;
      .fb-icon,
      .faekbook {
        color: ${p => p.theme.font};
        &:hover {
          cursor: pointer;
        }
      }
      .fb-icon {
        height: ${globalValues.navbar_elements_height};
        width: ${globalValues.navbar_elements_height};
        animation: ${rotation} 2s infinite linear;
      }
    }
  }
  .right {
    display: flex;
    column-gap: ${globalValues.navbar_column_gap};
    .toggle-dropdown-menu {
      height: ${globalValues.navbar_elements_height};
      width: ${globalValues.navbar_elements_height};
      border-radius: 50%;
      background: ${p =>
        p.menuVisibility
          ? p.theme.theme_toggler_bgclr_active
          : p.theme.theme_toggler_bgclr};
      font-size: ${globalValues.navbar_elements_height};
      color: ${p =>
        p.menuVisibility
          ? p.theme.theme_toggler_icon_active
          : p.theme.icon_color};
      &:hover {
        cursor: pointer;
        filter: brightness(${p => (p.theme.type === 'light' ? '0.9' : '1.3')});
      }
    }
    a .user-profile-button,
    .log-in-button {
      height: ${globalValues.navbar_elements_height};
      border-radius: 50px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 1.25rem;
      color: ${p => p.theme.font};
      &:hover {
        cursor: pointer;
        background: ${p =>
          p.menuVisibility
            ? p.theme.theme_toggler_bgclr_active
            : p.theme.theme_toggler_bgclr};
      }
    }
    a {
      text-decoration: none;
      .user-profile-button {
        column-gap: 0.6rem;
        padding-left: 0.35rem;
        padding-right: 0.6rem;
        img {
          height: calc(${globalValues.navbar_elements_height} - 0.7rem);
          border-radius: 50%;
          background: ${p => p.theme.theme_toggler_bgclr};
        }
      }
    }
    .log-in-button {
      padding-inline: 1rem;
    }
  }
`

export default Navbar
