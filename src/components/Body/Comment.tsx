import { BsThreeDots } from 'react-icons/bs'
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import { defaultAvatar } from '../../utils/defaults'
import { Timestamp } from '@firebase/firestore'
import { format } from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'
import { db, Storage } from '../../firebaseConfig'

const Comment: React.FC<{
  commenterUID: string
  content: string
  likes: Array<string>
  date: Timestamp
}> = ({ commenterUID, content, date, likes }) => {
  const { toggleState } = useContext(Context)
  const [commentAvatar, setCommentAvatar] = useState<any>(null)
  useEffect(() => {
    Storage.setPhotosURL(commenterUID, setCommentAvatar)
  }, [])
  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      three_dots={BsThreeDots}
    >
      <img src={commentAvatar || defaultAvatar} alt='comment_avatar' />

      <div className='middle'>
        <div className='top'>
          <div className='bubble'>
            <div className='username'>{commenterUID}</div>
            <div className='content'>{content}</div>
          </div>
          <div className='three-dots'>
            <BsThreeDots className='icon' />
          </div>
        </div>
        <div className='like'>
          Like{' '}
          {`${format(fromUnixTime(date.seconds), 'yyyy, MMM d')} at ${format(
            fromUnixTime(date.seconds),
            'h:mm a'
          )}`}
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{ three_dots: any }>`
  display: flex;
  column-gap: 1rem;
  img {
    height: 3.5rem;
    width: 3.5rem;
  }
  .middle {
    .top {
      display: flex;
      .bubble {
        padding: 1rem;
        border-radius: 1rem;
        background: ${p => p.theme.whats_on_ur_mind_bgclr};
        font-size: 1.15rem;
        color: ${p => p.theme.font};
        max-width: 95%;
        .username {
          font-weight: 500;
          padding-bottom: 0.25rem;
        }
        .content {
          line-height: 1.4;
        }
      }
      .three-dots {
        display: grid;
        place-items: center;
        width: 1rem;
        margin-left: 1rem;
        .icon {
          display: none;
        }
        &:hover {
          .icon {
            display: block;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .like {
      padding: 0.5rem 0 0 1rem;
      font-weight: 600;
    }
  }
`

export default Comment
