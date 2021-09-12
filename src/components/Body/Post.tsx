import React, { useContext } from 'react'
import styled from 'styled-components'
import myAvatar from '../../utils/images/picture_of_myself.jpg'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import { AiFillLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import globalValues from '../../styles/globalValues'
import { format } from 'date-fns'

const Post: React.FC<{
  first_name: string
  last_name: string
  avatar: string
  date_created: Date
  content: string
  likes: number
}> = ({ first_name, last_name, avatar, date_created, content, likes }) => {
  const { toggleState } = useContext(Context)
  return (
    <StyledSection
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
    >
      <div id='user-info'>
        <img src={myAvatar} alt='avatar' />
        <div className='info'>
          <div className='name'>{first_name + ' ' + last_name}</div>
          <div className='time'>{format(date_created, 'MMM d')}</div>
        </div>
      </div>
      <main id='content'>{content}</main>
      {likes > 0 && (
        <div id='likes'>
          <img
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
            alt=''
          />
          <span>{likes}</span>
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
      <div id='comment-input'>
        <img src={myAvatar} alt='avatar' />
        <input placeholder='Write a comment...'></input>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled('section')<{ isDarkTheme: number }>`
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
      color: #036ee2;
    }
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
