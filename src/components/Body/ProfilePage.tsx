import React, { useContext, useEffect, useRef, useState } from 'react'
import { defaultAvatar, defaultCoverImage } from '../../utils/defaultPhotos'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { imageObjectSettings, themes } from '../../utils/themes'
import { AiOutlineCamera, AiFillCamera } from 'react-icons/ai'
import ColorThief from 'colorthief'
import useWindowSize, { Size } from '../../utils/useWindowSize'
import WhatsOnYourMind from './WhatsOnYourMind'
import { DB, db, Storage, storage } from '../../firebaseConfig'
import Post from './Post'
import { AiOutlineEdit } from 'react-icons/ai'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from '@firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@firebase/storage'
import { useParams } from 'react-router'
import ShowMoreButton from '../../utils/ShowMoreButton'
import CommentModal from '../Modals/CommentModal'
import WriteAComment from './WriteAComment'

const ProfilePage: React.FC<any> = () => {
  const {
    toggleState,
    isUserSignedIn,
    currentUserInfo,
    CUAvatarURL,
    setCUAvatarURL,
  } = useContext(Context)
  const { userID }: { userID: string } = useParams()
  const [userInfo, setUserInfo] = useState<any>(null)
  const [userCoverImgURL, setCoverImageURL] = useState<any>(null)
  const [userAvatarURL, setUserAvatarURL] = useState<any>(null)
  const [userPosts, setUserPosts] = useState<any>(null)
  const [editCoverPhotoHidden, setEditCoverPhotoHidden] = useState(false)
  const [bgGradient, setBgGradient] = useState<string>('')
  const [postsNumLimit, setPostsNumLimit] = useState<number>(5)
  const [hasShownAllPosts, setHasShownAllPosts] = useState<boolean>(false)
  const [isEdittingBio, setIsEdittingBio] = useState<boolean>(false)
  const [isEdittingBioContent, setIsEdittingBioContent] = useState<string>('')
  const [bio, setBio] = useState<string>('')

  //*! LIMIT POSTS */
  useEffect(() => {
    if (currentUserInfo) {
      const postsRef = collection(db, 'posts')
      const q = query(postsRef, where('userID', '==', currentUserInfo.uid))
      getDocs(q).then(posts => {
        postsNumLimit >= posts.size
          ? setHasShownAllPosts(true)
          : setHasShownAllPosts(false)
      })
    }
  }, [currentUserInfo, postsNumLimit, userPosts])
  //*! LIMIT POSTS END */

  useEffect(() => {
    getDoc(doc(db, 'users', userID)).then(userSnap => {
      const userInfo = userSnap.data()
      setUserInfo(userInfo)
    })
    Storage.updatePhotoURL(userID, setUserAvatarURL, setCoverImageURL)
    // * SET USER PHOTO/
    const fileRef = ref(storage, `users/${userID}/avatar`)
    getDownloadURL(fileRef).then(url => setUserAvatarURL(url))
    // * SET USER PHOTO END/
  }, [userID])

  //*! RENDER POSTS START */
  useEffect(() => {
    const postsRef = collection(db, 'posts')
    const q = query(
      postsRef,
      where('userID', '==', userID),
      orderBy('date', 'desc'),
      limit(postsNumLimit)
    )
    const unsub = DB.setSnapshotListener(q, setUserPosts)
    console.log('profile renders')
    return () => {
      unsub()
    }
  }, [postsNumLimit, userID])
  const renderPosts = userPosts?.map((p: any) => (
    <Post
      key={p.id}
      postID={p.id}
      userID={p.userID}
      full_name={p.fullname}
      date={p.date}
      content={p.content}
      likes={p.likes}
      is_profile_page={true}
    />
  ))
  //*! RENDER POSTS END */

  //*! EFFECTS START */
  //* width size query for the edit cover photo button */
  const size: Size = useWindowSize()
  useEffect(() => {
    const { width } = size
    if (width !== undefined && width <= 900) {
      setEditCoverPhotoHidden(true)
    } else setEditCoverPhotoHidden(false)
  }, [size])
  //* get dorminant color of cover photo */
  useEffect(() => {
    const colorThief = new ColorThief()
    const img: any = document.querySelector('#get-dominant-clr')
    img.onload = () => {
      const color = colorThief.getColor(img).toString()
      setBgGradient(color)
    }
  }, [isUserSignedIn])
  const googleProxyURL =
    'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url='
  //? proxy server produces a more liberal CORS policy */
  const userCover = googleProxyURL + encodeURIComponent(userCoverImgURL)
  const defaultCover = googleProxyURL + encodeURIComponent(defaultCoverImage)
  const renderColorThief = (
    <img
      src={userCoverImgURL ? userCover : defaultCover}
      crossOrigin='anonymous'
      id='get-dominant-clr'
    />
  )
  //*! EFFECTS END */

  const updatePhoto = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const isAvatar = e.target.id === 'avatar'
      const fileName = isAvatar ? 'avatar' : 'cover_image'
      const fileRef = ref(storage, `users/${userID}/${fileName}`)
      deleteObject(fileRef).catch(e => console.log(e))
      uploadBytes(fileRef, file).then(() =>
        getDownloadURL(fileRef).then(url =>
          isAvatar
            ? userID === currentUserInfo?.uid
              ? setCUAvatarURL(url)
              : setUserAvatarURL(url)
            : setCoverImageURL(url)
        )
      )
    }
  }

  useEffect(() => {
    // const q = query(collection(db, 'users'), where('uid', '==', userID))
    // const unsub = onSnapshot(q, (user: any) => setBio(user.short_bio))
    getDoc(doc(db, 'users', userID)).then((user: any) =>
      setBio(user.data().short_bio)
    )
    // return () => unsub()
  }, [])

  const updateBio = (e: any) => {
    if (e.keyCode === 13) {
      DB.updateUserInfo(currentUserInfo?.uid, {
        short_bio: isEdittingBioContent,
      })
      setBio(isEdittingBioContent)
      setIsEdittingBio(false)
    } else if (e.keyCode == 27) setIsEdittingBio(false)
  }

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      bgGradient={bgGradient}
      editCoverPhotoHidden={editCoverPhotoHidden}
    >
      <header>
        <div id='cover-image'>
          {renderColorThief}
          <div className='avatar'>
            <img
              src={
                userID === currentUserInfo?.uid
                  ? CUAvatarURL || defaultAvatar
                  : userAvatarURL || defaultAvatar
              }
              alt='avatar'
            />
            {userID === currentUserInfo?.uid && (
              <label className='update-avatar'>
                <input
                  onChange={updatePhoto}
                  id='avatar'
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                />
                {toggleState.isDarkTheme ? (
                  <AiFillCamera className='icon' style={{ fill: 'white' }} />
                ) : (
                  <AiOutlineCamera className='icon' />
                )}
              </label>
            )}
          </div>
          {userID === currentUserInfo?.uid && (
            <label className='edit-cover-photo'>
              <input
                onChange={updatePhoto}
                id='cover'
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
              />
              <AiFillCamera className='icon' /> <span>Edit Cover Photo</span>
            </label>
          )}
        </div>

        <div id='intro'>
          <div className='name'>
            {userInfo
              ? `${userInfo.first_name} ${userInfo.last_name}`
              : 'default name'}
          </div>
          <div className='short-description'>
            {isEdittingBio ? (
              <>
                <textarea
                  rows={3}
                  maxLength={150}
                  value={isEdittingBioContent}
                  onChange={e => setIsEdittingBioContent(e.target.value)}
                  onKeyDown={updateBio}
                  autoFocus
                  onFocus={e =>
                    e.currentTarget.setSelectionRange(
                      e.currentTarget.value.length,
                      e.currentTarget.value.length
                    )
                  }
                ></textarea>
                <div className='cancel'>
                  <span onClick={() => setIsEdittingBio(false)}>Cancel</span> or
                  press Esc to cancel
                </div>
              </>
            ) : (
              <>
                <span className='bio'>{bio}</span>
                {userID === currentUserInfo?.uid && (
                  <div
                    className='pen'
                    onClick={() => {
                      setIsEdittingBio(true)
                      setIsEdittingBioContent(bio)
                    }}
                  >
                    <AiOutlineEdit className='icon' />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </header>
      <main>
        {userID === currentUserInfo?.uid && <WhatsOnYourMind />}
        {renderPosts}
        {hasShownAllPosts || (
          <ShowMoreButton
            addMorePosts={() => {
              setPostsNumLimit(postsNumLimit + 5)
            }}
          />
        )}
      </main>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{
  bgGradient: string
  editCoverPhotoHidden: boolean
  isDarkTheme: number
}>`
  color: ${p => p.theme.font};
  padding-bottom: 2rem;
  display: flex;
  flex-flow: column;
  header {
    background-color: ${p => p.theme.main_bgclr};
    background: linear-gradient(
      180deg,
      rgba(${p => p.bgGradient}) 0%,
      ${p => p.theme.main_bgclr} 70%
    );
    #cover-image {
      position: relative;
      width: 90rem;
      max-width: 100%;
      aspect-ratio: 5/2;
      margin-inline: auto;
      & > img {
        border-radius: 0 0 10px 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
      }
      .avatar {
        position: absolute;
        bottom: -4rem;
        left: 50%;
        transform: translateX(-50%);
        width: 15rem;
        height: 15rem;
        padding: 0.5rem;
        background-color: ${p => p.theme.main_bgclr};
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          ${imageObjectSettings};
        }
        .update-avatar {
          position: absolute;
          right: 1.1rem;
          bottom: 1.1rem;
          padding: 0.5rem;
          border-radius: 50%;
          background-color: ${p => p.theme.avatar_pic_cam_icon_bgclr};
          :hover {
            cursor: pointer;
            filter: brightness(1.1);
          }
          .icon {
            height: 2rem;
            width: 2rem;
          }
        }
      }
      .edit-cover-photo {
        color: black;
        position: absolute;
        right: 2rem;
        bottom: 3rem;
        background-color: white;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        column-gap: 1rem;
        border-radius: 7px;
        :hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
        .icon {
          height: 1.5rem;
          width: 1.5rem;
        }
        span {
          font-size: 1rem;
          font-weight: 700;
          display: ${p => (p.editCoverPhotoHidden ? 'none' : 'block')};
        }
      }
    }
    #intro {
      padding: 5rem 2rem 2rem;
      text-align: center;
      .name {
        font-size: 2.75rem;
        font-weight: 800;
      }
      .short-description {
        padding-top: 1rem;
        font-size: 1.5rem;
        .bio {
          margin-right: 1rem;
        }
        textarea {
          font-family: inherit;
          color: ${p => p.theme.font};
          border: none;
          outline: none;
          width: 65rem;
          max-width: 100%;
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
          border-radius: 2rem;
          background: ${p => p.theme.whats_on_ur_mind_bgclr};
          resize: none;
          overflow: hidden;
          text-align: center;
          :hover {
            cursor: text;
            filter: brightness(${p => (p.isDarkTheme ? '1.1' : '0.95')});
          }
          ::placeholder {
            color: ${p => p.theme.font_lighter};
          }
        }
        .cancel {
          font-size: 1.25rem;
          margin-top: 1rem;
          span {
            color: #036ee2;
            :hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
        .pen {
          display: inline-block;
          padding: 0.5rem;
          border-radius: 50%;
          color: ${p => p.theme.font};
          :hover {
            background-color: ${p => p.theme.theme_toggler_bgclr};
            cursor: pointer;
          }
          .icon {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  main {
    display: flex;
    flex-flow: column;
  }
`

export default ProfilePage
