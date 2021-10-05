import { useContext, useEffect, useRef, useState } from 'react'
import Context from '../../utils/Context'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import { imageObjectSettings, themes } from '../../utils/themes'
import { Link } from 'react-router-dom'
import BlueBgLikeIcon from '../../utils/BlueBgLikeIcon'

const ViewLikes: React.FC<{
  setIsShowingViewLikes: any
  likes: any
  isComment?: boolean
}> = ({ setIsShowingViewLikes, likes, isComment }) => {
  const { toggleState } = useContext(Context)
  const modalNode = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const renderLikesInfo = likes.map((like: any) => {
    return (
      <div id='user' key={like.userID}>
        <Link to={`/faekbook/${like.userID}`}>
          <div className='avatar'>
            <img src={like.avatarURL} alt='avatar' className='image' />
            <BlueBgLikeIcon />
          </div>
          <span>{like.full_name}</span>
        </Link>
      </div>
    )
  })

  const handleClick = (e: any) => {
    e.target === modalNode.current || setIsShowingViewLikes(false)
  }
  return (
    <StyledDiv
      ref={modalNode}
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isComment={isComment ? 1 : 0}
    >
      {renderLikesInfo}
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{ isComment: number }>`
  position: absolute;
  display: flex;
  flex-flow: column;
  z-index: 100;
  /* z-index: ${p => p.isComment && '100'}; */
  left: ${p => (p.isComment ? '3.5rem' : '4rem')};
  width: ${p => (p.isComment ? '18rem' : '25rem')};
  padding: 0.5rem;
  max-height: 18rem;
  border-radius: ${globalValues.dropdown_menu_bdr_rds};
  background: ${p => p.theme.main_bgclr};
  box-shadow: ${p => p.theme.bxShdw};
  font-size: ${p => (p.isComment ? '1rem' : '1.25rem')};
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.font_lighter};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    margin-block: 0.5rem;
  }
  #user {
    a {
      text-decoration: none;
      display: flex;
      cursor: pointer;
      border-radius: ${globalValues.dropdown_menu_bdr_rds};
      padding: 0.5rem;
      column-gap: ${p => (p.isComment ? '1.25rem' : '2rem')};
      align-items: center;
      color: ${p => p.theme.font};
      font-weight: 700;
      height: ${p => (p.isComment ? '4rem' : '5rem')};
      line-height: 1.25;
      :hover {
        background-color: ${p => p.theme.hover};
        text-decoration: none;
      }
      .avatar {
        position: relative;
        height: ${p => (p.isComment ? '3rem' : '3.5rem')};
        width: ${p => (p.isComment ? '3rem' : '3.5rem')};
        .image {
          height: inherit;
          width: inherit;
          ${imageObjectSettings};
        }
        .icon {
          position: absolute;
          bottom: -0.5rem;
          right: -0.5rem;
          height: ${p => (p.isComment ? '1.25rem' : '1.5rem')};
          width: ${p => (p.isComment ? '1.25rem' : '1.5rem')};
        }
      }
    }
  }
`

export default ViewLikes
