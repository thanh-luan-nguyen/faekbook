import styled, { keyframes } from 'styled-components'
import globalValues from '../styles/globalValues'
import { FaFacebook } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import Context from '../utils/Context'
import React, { useContext } from 'react'
import DropDownMenu from './DropDownMenu'
import { themes } from '../utils/themes'
import { Link } from 'react-router-dom'
import Authen from '../firebase'
import { useEffect } from 'react'
import myAvatar from '../utils/images/picture_of_myself.jpg'

const Navbar: React.FC<any> = () => {
  const value = useContext(Context)

  const theme = value.isDarkTheme ? themes.dark : themes.light

  const menuVisibility = value.menuVisibility
  const handleToggleMenuVisibility = value.handleToggleMenuVisibility

  const isSignedIn = value.isSignedIn
  const handleSignIn = value.handleSignIn
  const handleSignOut = value.handleSignOut

  useEffect(() => {
    Authen.handleAuthStateChange(handleSignIn, handleSignOut)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const userProfileButton = (
    <Link to='/faekbook/profile'>
      <div className='user-profile-button'>
        <img src={myAvatar} alt='avatar' />
        Nguyen
      </div>
    </Link>
  )

  const logInButton = <div className='log-in-button'>Log In</div>

  return (
    <Wrapper theme={theme} menuVisibility={menuVisibility ? 1 : 0}>
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
            handleToggleMenuVisibility()
          }}
        >
          <MdArrowDropDown />
        </div>
      </div>
      {menuVisibility && <DropDownMenu />}
    </Wrapper>
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

const Wrapper = styled('nav')<{ menuVisibility: number }>`
  background: ${props => props.theme.navbar};
  height: ${globalValues.navbar_height};
  box-shadow: ${globalValues.bxShdw};
  border-bottom: 1px solid ${props => props.theme.nav_btm_brdr_clr};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
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
        color: ${props => props.theme.font};
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
      background: ${props =>
        props.menuVisibility
          ? props.theme.theme_toggler_bgclr_active
          : props.theme.theme_toggler_bgclr};
      font-size: ${globalValues.navbar_elements_height};
      color: ${props =>
        props.menuVisibility
          ? props.theme.theme_toggler_icon_active
          : props.theme.icon_color};
      &:hover {
        cursor: pointer;
        filter: brightness(
          ${props => (props.theme.type === 'light' ? '0.9' : '1.3')}
        );
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
      color: ${props => props.theme.font};
      &:hover {
        cursor: pointer;
        background: ${props =>
          props.menuVisibility
            ? props.theme.theme_toggler_bgclr_active
            : props.theme.theme_toggler_bgclr};
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
        }
      }
    }
    .log-in-button {
      padding-inline: 1rem;
    }
  }
`

export default Navbar
