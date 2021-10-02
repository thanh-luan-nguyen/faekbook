import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import Context from '../../utils/Context'
import TurnOffModalButton from '../../utils/TurnOffModalButton'
import { imageObjectSettings, themes } from '../../utils/themes'
import { PostType } from '../../interface'
import { db } from '../../firebaseConfig'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from '@firebase/firestore'
import { defaultAvatar } from '../../utils/defaultPhotos'

export default function EditPostModal({ CBEPostID }: { CBEPostID: string }) {
  const [content, setContent] = useState<string>('')
  const beforeEdittedContent = useRef<string>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const { currentUserInfo, toggleState, dispatchDimBgModal, CUAvatarURL } =
    useContext(Context)

  useEffect(() => {
    getDoc(doc(db, 'posts', CBEPostID)).then(post => {
      const content = post.data()?.content
      beforeEdittedContent.current = content
      setContent(content)
      setIsLoaded(true)
    })
    return () => {
      beforeEdittedContent.current = ''
      setContent('')
      setIsLoaded(false)
    }
  }, [CBEPostID])

  const updatePost = () => {
    updateDoc(doc(db, 'posts', CBEPostID), { content: content })
    dispatchDimBgModal({ type: 'NONE' })
  }

  return isLoaded ? (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      textSmallSize={content?.length > 40 ? 1 : 0}
      postButtonActivated={content !== beforeEdittedContent.current ? 1 : 0}
    >
      <TurnOffModalButton />
      <div id='top'>
        <div>Edit Post</div>
      </div>
      <div className='divider'></div>
      <div id='middle'>
        <img src={CUAvatarURL || defaultAvatar} alt='my_avatar' />
        <div className='name'>
          {currentUserInfo &&
            `${currentUserInfo.first_name} ${currentUserInfo.last_name}`}
        </div>
      </div>
      <textarea
        onChange={e => setContent(e.target.value)}
        value={content}
        autoFocus
        onFocus={e =>
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }
      />
      <div className='post-button'>
        <button
          disabled={content === beforeEdittedContent.current}
          onClick={updatePost}
        >
          Update Post
        </button>
      </div>
    </StyledDiv>
  ) : null
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
      ${imageObjectSettings}
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
