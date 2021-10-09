import { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import globalValues, {
  customizedScrollBar,
  imageObjectSettings,
} from '../../styles/globalValues'
import Context from '../../utils/Context'
import TurnOffModalButton from '../../utils/TurnOffModalButton'
import { themes } from '../../styles/themes'
import { db, storage } from '../../firebaseConfig'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from '@firebase/firestore'
import { defaultAvatar } from '../../utils/defaultPhotos'
import { IoClose, IoImages } from 'react-icons/io5'
import { PostType } from '../../interface'
import { v4 as uuid } from 'uuid'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@firebase/storage'

export default function AddEditPostModal({
  CBEPost,
}: {
  CBEPost?: { id: string; photoID: string }
}) {
  const { currentUserInfo, toggleState, dispatchDimBgModal, CUAvatarURL } =
    useContext(Context)
  const [content, setContent] = useState<string>('')
  const [previewPhoto, setPreviewPhoto] = useState<any>()
  const [imgBlob, setImgBlob] = useState<any>()
  const beforeEdittedContent = useRef<string>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // * EDIT POST /
  useEffect(() => {
    if (CBEPost) {
      getDoc(doc(db, 'posts', CBEPost.id)).then(post => {
        const content = post.data()?.content
        beforeEdittedContent.current = content
        setContent(content)
        setIsLoaded(true)
      })
      if (CBEPost.photoID) {
        const fileRef = ref(storage, `post_photos/${CBEPost.photoID}`)
        getDownloadURL(fileRef).then(url => setPreviewPhoto(url))
      }
    }
  }, [CBEPost])

  const updatePost = () => {
    if (CBEPost) {
      if (previewPhoto) {
        if (imgBlob) {
          CBEPost.photoID &&
            deleteObject(ref(storage, `post_photos/${CBEPost.photoID}`))
          const id = uuid()
          const fileRef = ref(storage, `post_photos/${id}`)
          uploadBytes(fileRef, imgBlob).then(() => {
            getDownloadURL(fileRef).then(url => {
              updateDoc(doc(db, 'posts', CBEPost.id), {
                content: content,
                photo: { url, id },
              })
            })
          })
        } else
          updateDoc(doc(db, 'posts', CBEPost.id), {
            content: content,
          })
      } else {
        deleteObject(ref(storage, `post_photos/${CBEPost.photoID}`))
        updateDoc(doc(db, 'posts', CBEPost.id), {
          content: content,
          photo: { url: '', id: '' },
        })
      }
      dispatchDimBgModal({ type: 'NONE' })
    }
  }
  // * EDIT POST END /

  // * ADD POST /
  const addPostToDB = (url = '', id = '') => {
    const post: PostType = {
      userID: currentUserInfo.uid,
      fullname: currentUserInfo.first_name + ' ' + currentUserInfo.last_name,
      date: Timestamp.fromDate(new Date()),
      content,
      photo: { url, id },
      likes: [],
      comments: [],
    }
    addDoc(collection(db, 'posts'), post)
    dispatchDimBgModal({ type: 'NONE' })
  }
  const addPost = () => {
    if (imgBlob) {
      const id = uuid()
      const fileRef = ref(storage, `post_photos/${id}`)
      uploadBytes(fileRef, imgBlob).then(() =>
        getDownloadURL(fileRef).then(url => addPostToDB(url, id))
      )
    } else addPostToDB()
  }
  // * ADD POST END /

  const renderModal = (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      textSmallSize={content?.length > 40 ? 1 : 0}
      postButtonActivated={content.length > 0 ? 1 : 0}
    >
      <div id='create-post'>
        {CBEPost ? 'Edit Post' : 'Create Post'}
        <TurnOffModalButton />
      </div>
      <div className='divider'></div>
      <div id='user'>
        <img src={CUAvatarURL || defaultAvatar} alt='my_avatar' />
        <div className='name'>
          {currentUserInfo &&
            `${currentUserInfo.first_name} ${currentUserInfo.last_name}`}
        </div>
      </div>
      <textarea
        placeholder="What's on your mind?"
        onChange={e => setContent(e.target.value)}
        value={CBEPost && content}
        autoFocus
        onFocus={e => {
          CBEPost &&
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
        }}
      />
      <div id='photo'>
        <div className='buttons'>
          <label className='upload-photo'>
            <input
              onChange={(e: any) => {
                const imgBlob = e.target.files[0]
                setPreviewPhoto(URL.createObjectURL(imgBlob))
                setImgBlob(imgBlob)
              }}
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
            />
            <IoImages />
          </label>
          {previewPhoto && (
            <div
              className='cancel-photo'
              onClick={() => {
                setPreviewPhoto('')
                setImgBlob('')
              }}
            >
              <IoClose />
            </div>
          )}
        </div>
        {previewPhoto && (
          <div className='preview'>
            <img src={previewPhoto} alt='preview' />
          </div>
        )}
      </div>
      <div id='post-button'>
        <button
          disabled={content.length === 0}
          onClick={() => (CBEPost ? updatePost() : addPost())}
        >
          {CBEPost ? 'Save' : 'Post'}
        </button>
      </div>
    </StyledDiv>
  )

  return CBEPost ? (isLoaded ? renderModal : null) : renderModal
}

const StyledDiv = styled('div')<{
  isDarkTheme: number
  textSmallSize: number
  postButtonActivated: number
}>`
  ${p => css`
    width: 50rem;
    max-width: 100vw;
    max-height: 40rem;
    background-color: ${p.theme.main_bgclr};
    color: ${p.theme.font};
    border-radius: 10px;
    overflow: auto;
    ${customizedScrollBar}
    #user,
    textarea,
    #post-button {
      padding: 1.5rem 1.5rem;
    }

    #create-post {
      line-height: 5.5rem;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      height: 5.5rem;
      position: relative;
      #turn-off-modal {
        top: 0;
      }
    }
    #user {
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
      font-size: ${p.textSmallSize ? '1.5rem' : '2.5rem'};
      display: block;
      border: none;
      outline: none;
      width: 100%;
      min-height: 10rem;
      resize: none;
      color: ${p.theme.font};
      overflow-y: auto;
      white-space: pre-wrap;
      ${customizedScrollBar}
    }
    #photo {
      position: relative;
      min-height: 6rem;
      margin-inline: auto;
      width: 95%;
      .buttons {
        position: absolute;
        width: 100%;
        display: flex;
        padding-top: 1rem;
        padding-right: 1rem;
        column-gap: 1rem;
        justify-content: end;
        .upload-photo,
        .cancel-photo {
          border-radius: 50%;
          height: 3.5rem;
          width: 3.5rem;
          display: grid;
          place-items: center;
          font-size: 2rem;
          color: #45bd62;
          background-color: ${p.theme.theme_toggler_bgclr};
          :hover {
            cursor: pointer;
            filter: brightness(${p.theme.type === 'light' ? '0.9' : '1.3'});
          }
        }
        .cancel-photo {
          color: ${p.theme.font};
          font-size: 2.5rem;
        }
      }
      .preview {
        margin-top: 2rem;
        img {
          width: 100%;
          border-radius: 15px;
        }
      }
    }
    #post-button {
      button {
        width: 100%;
        height: 3.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: ${globalValues.dropdown_menu_bdr_rds};
        margin-inline: auto;
        border: none;
        color: ${p.postButtonActivated ? 'white' : '#858686'};
        background-color: ${p.postButtonActivated
          ? '#2D88FF'
          : p.isDarkTheme
          ? '#505151'
          : '#e4e6eb'};
        :hover {
          cursor: ${p.postButtonActivated ? 'pointer' : 'not-allowed'};
        }
      }
    }
    .divider {
      background-color: ${p.isDarkTheme ? '#424242' : '#dddfe2'};
      margin-inline: auto;
      height: 2px;
      width: 100%;
    }
  `};
`
