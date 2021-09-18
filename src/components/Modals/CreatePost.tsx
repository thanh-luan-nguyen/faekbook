import { useContext, useState } from 'react'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import Context from '../../utils/Context'
import TurnOffModalButton from './TurnOffModalButton'
import myAvatar from '../../utils/images/picture_of_myself.jpg'
import { themes } from '../../utils/themes'
import defaultAvatar from '../../utils/images/default_user.png'

export default function CreatePost() {
  const [textLength, setTextLength] = useState<number>(0)
  const { currentUserInfoState, toggleState } = useContext(Context)

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      textSmallSize={textLength > 40 ? 1 : 0}
      postButtonActivated={textLength > 0 ? 1 : 0}
    >
      <TurnOffModalButton />
      <div id='top'>
        <div>Create Post</div>
      </div>
      <div className='divider'></div>
      <div id='middle'>
        <img
          src={
            currentUserInfoState ? currentUserInfoState.avatar : defaultAvatar
          }
          alt='my_avatar'
        />
        <div className='name'>
          {currentUserInfoState &&
            `${currentUserInfoState.first_name} ${currentUserInfoState.last_name}`}
        </div>
      </div>
      <textarea
        placeholder="What's on your mind?"
        onChange={e => setTextLength(e.target.value.length)}
      />
      <div className='post-button'>
        <button>Post</button>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{
  isDarkTheme: number
  textSmallSize: number
  postButtonActivated: number
}>`
  width: 50rem;
  max-width: 100vw;
  background-color: ${p => p.theme.main_bgclr};
  color: ${p => p.theme.font};
  border-radius: 10px;

  #middle,
  textarea,
  .post-button {
    padding: 1.5rem 1.5rem;
  }

  #top {
    line-height: 5.5rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    height: 5.5rem;
  }
  #middle {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 4rem;
      width: 4rem;
    }
    .name {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  textarea {
    padding-top: 0;
    background-color: inherit;
    font-family: inherit;
    font-size: ${p => (p.textSmallSize ? '1.5rem' : '2.5rem')};
    display: block;
    border: none;
    outline: none;
    width: 100%;
    min-height: 15rem;
    resize: none;
    color: ${p => p.theme.font};
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.75rem;
      border-radius: 3px;
      background-color: rgba(195, 195, 195, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(114, 114, 114, 0.5);
      &:hover {
        cursor: pointer;
      }
    }
  }
  .post-button {
    button {
      width: 100%;
      height: 3.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: ${globalValues.dropdown_menu_bdr_rds};
      margin-inline: auto;
      border: none;
      color: ${p => (p.postButtonActivated ? 'white' : '#858686')};
      background-color: ${p =>
        p.postButtonActivated
          ? '#2D88FF'
          : p.isDarkTheme
          ? '#505151'
          : '#e4e6eb'};
      &:hover {
        cursor: ${p => (p.postButtonActivated ? 'pointer' : 'not-allowed')};
      }
    }
  }

  .divider {
    background-color: ${p => (p.isDarkTheme ? '#2f3031' : '#dddfe2')};
    margin-inline: auto;
    height: 1px;
    width: 100%;
  }
`
