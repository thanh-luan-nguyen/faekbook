import React, { useContext, useEffect, useState } from 'react'
import { defaultAvatar, defaultCoverImage } from '../../utils/defaults'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { imageObjectSettings, themes } from '../../utils/themes'
import { AiOutlineCamera, AiFillCamera } from 'react-icons/ai'
import ColorThief from 'colorthief'
import useWindowSize, { Size } from '../../hooks/useWindowSize'
import WhatsOnYourMind from './WhatsOnYourMind'
import { Authen, db, DB, storage } from '../../firebaseConfig'
import Post from './Post'
import {
  collection,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from '@firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@firebase/storage'

const ProfilePage: React.FC<any> = () => {
  const {
    currentUserInfo,
    toggleState,
    updatePhoto,
    CUAvatarURL,
    CUCoverImgURL,
  } = useContext(Context)
  const [bgGradient, setBgGradient] = useState<string>('')
  const [editCoverPhotoHidden, setEditCoverPhotoHidden] = useState(false)

  /* get dorminant color of cover photo */
  useEffect(() => {
    const colorThief = new ColorThief()
    const img: any = document.querySelector('#get-dominant-clr')
    img.onload = () => {
      const color = colorThief.getColor(img).toString()
      setBgGradient(color)
    }
  }, [])

  /* width size query for the edit cover photo button */
  const size: Size = useWindowSize()
  useEffect(() => {
    const { width } = size
    if (width !== undefined && width <= 900) {
      setEditCoverPhotoHidden(true)
    } else setEditCoverPhotoHidden(false)
  }, [size])

  const [CUPosts, setCUPosts] = useState<any>(null)

  useEffect(() => {
    const postsRef = collection(db, 'posts')
    const q = query(
      postsRef,
      where('uid', '==', currentUserInfo && currentUserInfo.uid),
      orderBy('date', 'desc')
    )
    const unsub = onSnapshot(q, (posts: any) => {
      const postsSnapShot: DocumentData[] = []
      posts.forEach((p: any) => postsSnapShot.push(p.data()))
      setCUPosts(postsSnapShot)
    })
    return () => {
      unsub()
    }
  }, [currentUserInfo])

  const renderPosts = CUPosts?.map((p: any) => (
    <Post
      uid={p.uid}
      key={p.date}
      full_name={p.fullname}
      date={p.date}
      content={p.content}
      likes={p.likes}
      is_profile_page={true}
    />
  ))

  const renderBgGradientColor = (
    <img
      src='https://www.google.com/photos/static/2020/images/index/tablet.jpg'
      crossOrigin='anonymous'
      // src={currentUserInfo ? currentUserInfo.cover_photo : defaultCoverImageURL}
      alt='colorthief'
      id='get-dominant-clr'
      // style={{ display: 'none' }}
    />
  )

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      coverPhoto={CUCoverImgURL ? CUCoverImgURL : defaultCoverImage}
      // coverPhoto={
      //   currentUserInfo ? currentUserInfo.cover_photo : defaultCoverImageURL
      // }
      bgGradient={bgGradient}
      editCoverPhotoHidden={editCoverPhotoHidden}
    >
      <header>
        <div id='cover-picture'>
          {renderBgGradientColor}
          <div className='avatar-picture'>
            <img src={CUAvatarURL ? CUAvatarURL : defaultAvatar} alt='avatar' />
            <label className='update-avatar'>
              <input
                onChange={updatePhoto}
                id='avatar'
                type='file'
                accept='image/*'
                capture='camera'
                style={{ display: 'none' }}
              />
              {toggleState.isDarkTheme ? (
                <AiFillCamera className='icon' style={{ fill: 'white' }} />
              ) : (
                <AiOutlineCamera className='icon' />
              )}
            </label>
          </div>
          <label className='edit-cover-photo'>
            <input
              onChange={updatePhoto}
              id='cover'
              type='file'
              accept='image/*'
              capture='camera'
              style={{ display: 'none' }}
            />
            <AiFillCamera className='icon' /> <span>Edit Cover Photo</span>
          </label>
        </div>

        <div id='intro'>
          <div className='name'>
            {currentUserInfo
              ? `${currentUserInfo.first_name} ${currentUserInfo.last_name}`
              : 'default name'}
          </div>
          <div className='short-description'>
            {currentUserInfo && currentUserInfo.short_bio}
          </div>
        </div>
      </header>
      <main>
        <WhatsOnYourMind />
        {renderPosts}
      </main>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{
  coverPhoto: any
  bgGradient: string
  editCoverPhotoHidden: boolean
}>`
  color: ${p => p.theme.font};
  padding-bottom: 2rem;
  header {
    background-color: ${p => p.theme.main_bgclr};
    background: linear-gradient(
      180deg,
      rgba(${p => p.bgGradient}) 0%,
      ${p => p.theme.main_bgclr} 50%
    );
    #cover-picture {
      position: relative;
      background-image: url(${p => p.coverPhoto});
      background-size: cover;
      background-position: 50% 50%;
      width: 90rem;
      max-width: 100%;
      aspect-ratio: 7/3;
      margin-inline: auto;
      border-radius: 0 0 10px 10px;
      .avatar-picture {
        position: absolute;
        bottom: -2rem;
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
          &:hover {
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
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
        .icon {
          height: 2rem;
          width: 2rem;
        }
        span {
          font-size: 1.2rem;
          font-weight: 700;
          display: ${p => (p.editCoverPhotoHidden ? 'none' : 'block')};
        }
      }
    }
    #intro {
      padding: 3rem 2rem 2rem;
      text-align: center;
      .name {
        font-size: 3.5rem;
        font-weight: 800;
      }
      .short-description {
        padding-top: 1rem;
        font-size: 1.75rem;
      }
    }
  }
  main {
  }
`

export default ProfilePage
