import { BsThreeDots } from 'react-icons/bs'
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import { defaultAvatar } from '../../utils/defaultPhotos'
import { doc, getDoc, Timestamp } from '@firebase/firestore'
import { format } from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'
import { DB, db, Storage } from '../../firebaseConfig'
import BlueBgLikeIcon from '../../utils/BlueBgLikeIcon'
import CommentModal from '../Modals/CommentModal'
import WriteAComment from './WriteAComment'
import { Link } from 'react-router-dom'
import ViewLikes from '../Modals/ViewLikes'
import { imageObjectSettings } from '../../styles/globalValues'

const Comment: React.FC<{
  commenterUID: string
  content: string
  likes: Array<string>
  date: Timestamp
  commentID: string
}> = ({ commenterUID, content, date, likes, commentID }) => {
  const { toggleState, currentUserInfo, isUserSignedIn } = useContext(Context)
  const [commentAvatar, setCommentAvatar] = useState<any>(null)
  const [userInfo, setUserInfo] = useState<any>(null)
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)
  const [isShowingViewLikes, setIsShowingViewLikes] = useState<boolean>(false)
  const [isLikedByCU, setIsLiked] = useState<boolean>(false)
  const [isEditting, setIsEditting] = useState<boolean>(false)

  // ! set photo URL/
  useEffect(() => {
    Storage.updatePhotoURL(commenterUID, setCommentAvatar)
    getDoc(doc(db, 'users', commenterUID)).then(userSnap => {
      const userInfo = userSnap.data()
      setUserInfo(userInfo)
    })
  }, [commenterUID])
  // ! set photo URL END/

  // !  setIsLiked /
  useEffect(() => {
    const likesUserIDs = likes.map((like: any) => like.userID)
    likesUserIDs.includes(currentUserInfo?.uid)
      ? setIsLiked(true)
      : setIsLiked(false)
  }, [currentUserInfo?.uid, likes])
  // !  setIsLiked END /

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isLikedByCU={isLikedByCU ? 1 : 0}
      hasLikes={likes.length > 0 ? 1 : 0}
    >
      <Link to={`/faekbook/${commenterUID}`}>
        <img src={commentAvatar || defaultAvatar} alt='comment_avatar' />
      </Link>
      {isEditting ? (
        <WriteAComment
          commentID={commentID}
          setIsEditting={setIsEditting}
          content={content}
        />
      ) : (
        <div className='middle'>
          <div className='top'>
            <div className='bubble'>
              <Link to={`/faekbook/${commenterUID}`}>
                <div className='username'>
                  {userInfo?.first_name} {userInfo?.last_name}
                </div>
              </Link>
              <div className='content'>{content}</div>
              {likes.length >= 1 && (
                <div
                  className='like-icon'
                  onClick={() => setIsShowingViewLikes(true)}
                >
                  <BlueBgLikeIcon />
                  <span>{likes.length}</span>
                  {isShowingViewLikes && (
                    <ViewLikes
                      likes={likes}
                      setIsShowingViewLikes={setIsShowingViewLikes}
                      isComment={true}
                    />
                  )}
                </div>
              )}
            </div>
            {commenterUID === currentUserInfo?.uid && (
              <div className='three-dots'>
                <div
                  className='icon'
                  onClick={() => setIsShowingModal(!isShowingModal)}
                >
                  <BsThreeDots />
                </div>
                {isShowingModal && (
                  <CommentModal
                    commentID={commentID}
                    setIsEditting={setIsEditting}
                    setIsShowingModal={setIsShowingModal}
                  />
                )}
              </div>
            )}
          </div>
          <div className='like'>
            {isUserSignedIn && (
              <span
                onClick={() =>
                  DB.like(currentUserInfo?.uid, commentID, 'comments')
                }
              >
                Like
              </span>
            )}
            {`${format(fromUnixTime(date.seconds), 'yyyy, MMM d')} at ${format(
              fromUnixTime(date.seconds),
              'h:mm a'
            )}`}
          </div>
        </div>
      )}
      {isEditting && (
        <div className='cancel' onClick={() => setIsEditting(!isEditting)}>
          Cancel
        </div>
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled('div')<{ isLikedByCU: number; hasLikes: number }>`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  :hover {
    & > .middle > .top > .three-dots > .icon > svg {
      display: block;
    }
  }
  img {
    height: 3.5rem;
    width: 3.5rem;
    ${imageObjectSettings};
    :hover {
      cursor: pointer;
    }
  }
  .middle {
    .top {
      display: flex;
      .bubble {
        padding: 1rem 1rem 0.5rem;
        border-radius: 20px;
        background: ${p => p.theme.whats_on_ur_mind_bgclr};
        font-size: 1.15rem;
        color: ${p => p.theme.font};
        position: relative;
        min-width: 13.5rem;
        a {
          color: inherit;
          text-decoration: none;
          .username {
            font-weight: 500;
            padding-bottom: 0.25rem;
            :hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        .content {
          line-height: 1.4;
        }
        .like-icon {
          border-radius: 10px;
          padding: 0.25rem;
          background: ${p => p.theme.like_icon_bgclr};
          box-shadow: rgba(0, 0, 0, 0.3) -1px 1px 3px;
          position: absolute;
          right: -1.75rem;
          bottom: 0.25rem;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          :hover {
            cursor: pointer;
          }
          img {
            margin-right: 0.25rem;
            height: 1.25rem;
            width: 1.25rem;
          }
        }
      }
      .three-dots {
        position: relative;
        display: grid;
        place-items: center;
        border-radius: 50%;
        width: ${p => (p.hasLikes ? '5rem' : '2rem')};
        margin-left: 1rem;
        font-size: 1.25rem;
        & > .icon {
          display: grid;
          place-items: center;
          border-radius: 50%;
          height: 2.5rem;
          width: 2.5rem;
          :hover {
            cursor: pointer;
            background-color: ${p => p.theme.theme_toggler_bgclr};
          }
          svg {
            display: none;
          }
        }
      }
    }
    .like {
      padding-top: 0.5rem;
      margin-left: 0.75rem;
      font-weight: 500;
      font-size: 0.85rem;
      span {
        color: ${p => p.isLikedByCU && '#036ee2'};
        font-weight: 600;
        font-size: 1rem;
        padding-right: 1rem;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
  .cancel {
    color: #036ee2;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export default Comment
