import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import { AiOutlineCamera, AiFillCamera } from 'react-icons/ai'
import myAvatar from '../../utils/images/picture_of_myself.jpg'
import coverPhoto from '../../utils/images/cover_photo.jpg'
import ColorThief from 'colorthief'
import useWindowSize, { Size } from '../../hooks/useWindowSize'
import WhatsOnYourMind from './WhatsOnYourMind'
import Post from './Post'
import { Luan } from '../../types/interface'

export default function ProfilePage() {
  const { toggleState } = useContext(Context)
  const [bgGradient, setBgGradient] = useState('')
  const [editCoverPhotoHidden, setEditCoverPhotoHidden] = useState(false)
  const size: Size = useWindowSize()

  useEffect(() => {
    const colorThief = new ColorThief()
    const img: any = document.querySelector('#get-dominant-clr')
    img.onload = () => {
      const color = colorThief.getColor(img).toString()
      setBgGradient(color)
    }
  }, [])

  useEffect(() => {
    const { width } = size
    if (width !== undefined && width <= 900) {
      setEditCoverPhotoHidden(true)
    } else setEditCoverPhotoHidden(false)
  }, [size])

  const renderBgGradientColor = (
    <img
      src={coverPhoto}
      alt='colorthief'
      id='get-dominant-clr'
      style={{ display: 'none' }}
    />
  )

  const renderLuansPosts = Luan.posts.map(p => (
    <Post
      first_name={Luan.first_name}
      last_name={Luan.last_name}
      avatar={Luan.avatar}
      date_created={p.date}
      content={p.content}
      likes={p.likes.length}
    />
  ))

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      coverPhoto={coverPhoto}
      bgGradient={bgGradient}
      editCoverPhotoHidden={editCoverPhotoHidden}
    >
      <header>
        <div id='cover-picture'>
          {renderBgGradientColor}
          <div className='avatar-picture'>
            <img src={myAvatar} alt='avatar' />
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
          <div className='name'>Thanh Luan Nguyen</div>
          <div className='short-description'>
            Why did you change? Why did you bend and break?
          </div>
        </div>
      </header>
      <main>
        <WhatsOnYourMind />
        {renderLuansPosts}
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
      width: 70rem;
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
