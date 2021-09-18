import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import myAvatar from '../../utils/images/picture_of_myself.jpg'
import { BsThreeDots } from 'react-icons/bs'
import defaultPhoto from '../../utils/images/default_user.png'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import { AiFillLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import globalValues from '../../styles/globalValues'
import { format } from 'date-fns'
import BlueBgLikeIcon from '../../utils/BlueBgLikeIcon'
import Comment from './Comment'
import defaultAvatar from '../../utils/images/default_user.png'

const Post: React.FC<{
  full_name: string
  avatar: string
  date: string
  content: string
  likes: Array<string>
}> = ({ full_name, avatar, date, content, likes }) => {
  const { currentUserInfoState, toggleState } = useContext(Context)
  const [isLikedByCurrentUser, setIsLiked] = useState<boolean>()
  const [hasAtLeastOneLike, setHasAtLeastOneLike] = useState<boolean>()
  // const [isShowingComments, setIsShowingComments] = useState(false)
  useEffect(() => {
    if (currentUserInfoState) {
      likes.includes(currentUserInfoState.auth.email)
        ? setIsLiked(true)
        : setIsLiked(false)
    } else setIsLiked(false)
    likes.length >= 1 ? setHasAtLeastOneLike(true) : setHasAtLeastOneLike(false)
  })
  return (
    <StyledSection
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      isLikedByCurrentUser={isLikedByCurrentUser ? 1 : 0}
    >
      <div id='user-info'>
        <img src={avatar} alt='avatar' />
        <div className='info'>
          <div className='name'>{full_name}</div>
          <div className='time'>
            {/* {format(date, 'MMM d')} */}
            {date}
          </div>
        </div>
      </div>
      <main id='content'>{content}</main>
      {hasAtLeastOneLike && (
        <div id='likes'>
          <BlueBgLikeIcon />
          <span>
            {likes.length} {likes}
          </span>
        </div>
      )}

      <div id='like-comment'>
        <div className='like'>
          <AiFillLike className='icon' />
          <span>Like</span>
        </div>
        <div className='comments'>
          <GoComment className='icon' />
          <span>View Comments</span>
        </div>
      </div>
      {/* <div id='comments'>
        <Comment
          username='Thanh Luan Nguyen'
          content='Lo rem ip sum dol or sit am et cons ect etur adi pis icing elit. Eaque, ten etur rei cie ndis! Vero ut co nsequ untur totam culpa num quam cupi d itate, qui bu sdam delen iti vel eos dolor emque assu me nda dolorum ad sint per fer endis! Eaque, repudia ndae?'
          likes={2}
        />
        <Comment username='Thanh Luan Nguyen' content='lorem ipsun' likes={2} />
      </div> */}
      <div id='comment-input'>
        <img
          src={
            currentUserInfoState ? currentUserInfoState.avatar : defaultAvatar
          }
          alt='avatar'
        />
        <input placeholder='Write a comment...'></input>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled('section')<{
  isDarkTheme: number
  isLikedByCurrentUser: number
}>`
  background-color: ${p => p.theme.main_bgclr};
  color: ${p => p.theme.font_lighter};
  width: 50rem;
  max-width: 100%;
  margin-inline: auto;
  border-radius: 1rem;
  margin-top: 2rem;
  padding-bottom: 1.5rem;
  #user-info {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 1.5rem 1.5rem 0;
    img {
      height: 4rem;
      width: 4rem;
    }
    .info {
      flex-grow: 1;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      height: 3.5rem;
      .name {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${p => p.theme.font};
      }
      .time {
      }
    }
  }
  #content {
    font-size: 1.5rem;
    padding: 1.5rem 1.5rem 0;
  }
  #likes {
    padding: 1.5rem 1.5rem 0;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    img {
      height: 1.75rem;
      width: 1.75rem;
    }
    span {
      font-size: 1.25rem;
    }
  }
  #like-comment {
    border-block: ${p => (p.isDarkTheme ? '#2f3031' : '#dddfe2')} 1px solid;
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;
    .like,
    .comments {
      height: 3.25rem;
      border-radius: ${globalValues.dropdown_menu_bdr_rds};
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 0.75rem;
      background-color: ${p => p.theme.main_bgclr};
      font-size: 1.25rem;
      font-weight: 600;
      .icon {
        font-size: 1.75rem;
      }
      &:hover {
        cursor: pointer;
        background-color: ${p => (p.isDarkTheme ? '#64646471' : '#ebebebae')};
      }
    }
    .like {
      color: ${p => p.isLikedByCurrentUser && '#036ee2'};
    }
  }
  #comments {
    padding: 1.5rem 1.5rem 0;
    margin-bottom: -0.75rem;
    display: flex;
    flex-flow: column;
    row-gap: 0.75rem;
  }
  #comment-input {
    background-color: ${p => p.theme.main_bgclr};
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 1.5rem 1.5rem 0;
    img {
      height: 3.5rem;
      width: 3.5rem;
      background: ${p => p.theme.theme_toggler_bgclr};
    }
    input {
      height: 3.5rem;
      color: ${p => p.theme.font};
      border: none;
      outline: none;
      flex-grow: 1;
      padding-left: 1.25rem;
      font-size: 1.5rem;
      border-radius: 2rem;
      background: ${p => p.theme.whats_on_ur_mind_bgclr};
      display: flex;
      align-items: center;
      &:hover {
        cursor: text;
        filter: brightness(${p => (p.isDarkTheme ? '1.1' : '0.95')});
      }
      &::placeholder {
        color: ${p => p.theme.font_lighter};
      }
    }
  }
`

export default Post
