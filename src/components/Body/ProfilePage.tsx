import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import { AiOutlineCamera, AiFillCamera } from 'react-icons/ai'
import defaultCoverPhoto from '../../utils/images/default_cover_photo.gif'
import defaultAvatar from '../../utils/images/default_user.png'
import ColorThief from 'colorthief'
import useWindowSize, { Size } from '../../hooks/useWindowSize'
import WhatsOnYourMind from './WhatsOnYourMind'
import { Authen, DB } from '../../firebase'
import Post from './Post'
import { fromUnixTime } from 'date-fns'

const ProfilePage: React.FC<any> = () => {
  const { currentEmail, setCurrentEmail, currentUserInfoState, toggleState } =
    useContext(Context)
  const [bgGradient, setBgGradient] = useState<string>('')
  const [editCoverPhotoHidden, setEditCoverPhotoHidden] = useState(false)
  const size: Size = useWindowSize()

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
  useEffect(() => {
    const { width } = size
    if (width !== undefined && width <= 900) {
      setEditCoverPhotoHidden(true)
    } else setEditCoverPhotoHidden(false)
  }, [size])

  useEffect(() => {
    const email = Authen.getUserEmail()
    setCurrentEmail(email)
  }, [])

  /* get current user posts */
  const [posts, setPosts] = useState<any>()
  useEffect(() => {
    DB.getPosts(currentEmail).then(posts => {
      if (posts) {
        posts.reverse()
        const currentUserPosts = posts.map(p => (
          <Post
            key={p.date.seconds}
            full_name={p.full_name}
            avatar={p.avatar}
            date={fromUnixTime(p.date.seconds).toString()}
            content={p.content}
            likes={p.likes}
          />
        ))
        setPosts(currentUserPosts)
      }
    })
  }, [])

  /* get current user info */

  const renderBgGradientColor = (
    <img
      src={
        currentUserInfoState
          ? currentUserInfoState.cover_photo
          : defaultCoverPhoto
      }
      alt='colorthief'
      id='get-dominant-clr'
      style={{ display: 'none' }}
    />
  )

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      coverPhoto={
        currentUserInfoState
          ? currentUserInfoState.cover_photo
          : defaultCoverPhoto
      }
      bgGradient={bgGradient}
      editCoverPhotoHidden={editCoverPhotoHidden}
    >
      <header>
        <div id='cover-picture'>
          {renderBgGradientColor}
          <div className='avatar-picture'>
            <img
              src={
                currentUserInfoState
                  ? currentUserInfoState.avatar
                  : defaultAvatar
              }
              alt='avatar'
            />
            <div className='update-avatar'>
              {toggleState.isDarkTheme ? (
                <AiFillCamera className='icon' style={{ fill: 'white' }} />
              ) : (
                <AiOutlineCamera className='icon' />
              )}
            </div>
          </div>
          <div className='edit-cover-photo'>
            <AiFillCamera className='icon' /> <span>Edit Cover Photo</span>
          </div>
        </div>

        <div id='intro'>
          <div className='name'>
            {currentUserInfoState
              ? `${currentUserInfoState.first_name} ${currentUserInfoState.last_name}`
              : 'default name'}
          </div>
          <div className='short-description'>
            {currentUserInfoState && currentUserInfoState.short_bio}
          </div>
        </div>
      </header>
      <main>
        <WhatsOnYourMind />
        {posts}
      </main>
      {/* <div className='dummyText'></div> */}
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
      background-position: 50% 40%;
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
