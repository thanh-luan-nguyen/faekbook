import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'
import Context from '../../utils/Context'
import { imageObjectSettings, themes } from '../../utils/themes'
import { AiFillLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import globalValues from '../../styles/globalValues'
import { format, fromUnixTime } from 'date-fns'
import BlueBgLikeIcon from '../../utils/BlueBgLikeIcon'
import { CommentType } from '../../types/interface'
import { defaultAvatar } from '../../utils/defaults'
import Comment from './Comment'
import { doc, getDoc, Timestamp, updateDoc } from '@firebase/firestore'
import { db, Storage } from '../../firebaseConfig'
import { Link } from 'react-router-dom'
import PostModal from '../Modals/PostModal'

const Post: React.FC<{
  userID: string
  postID: string
  full_name: string
  date: Timestamp
  content: string
  likes: Array<string>
  comments: Array<CommentType>
  is_profile_page?: boolean
}> = ({ full_name, userID, postID, date, content, likes, comments }) => {
  const { currentUserInfo, toggleState, isUserSignedIn, CUAvatarURL } =
    useContext(Context)
  const [isLikedByCurrentUser, setIsLiked] = useState<boolean>(false)
  const [postAvatarURL, setPostAvatar] = useState<any>(null)
  useEffect(() => {
    //* set post avatar */
    ;(async () => {
      Storage.setPhotosURL(userID, setPostAvatar)
    })()
    //* set like effects */
    if (isUserSignedIn) {
      likes.includes(currentUserInfo?.uid)
        ? setIsLiked(true)
        : setIsLiked(false)
    } else setIsLiked(false)
  }, [likes, isUserSignedIn])

  const toggleLikeThisPost = () => {
    const userID = currentUserInfo?.uid
    getDoc(doc(db, 'posts', postID)).then(p => {
      const likes = p.data()?.likes
      likes.includes(userID)
        ? likes.splice(likes.indexOf(userID), 1)
        : likes.push(userID)
      updateDoc(doc(db, 'posts', postID), { likes: likes })
    })
  }

  const [isShowingComments, setIsShowingComments] = useState(false)
  const [commentContent, setCommentContent] = useState('')
  const postComment = (e: any) => {
    e.preventDefault()
    if (commentContent !== '') {
      const userID = currentUserInfo?.uid
      getDoc(doc(db, 'posts', postID)).then(p => {
        const comments = p.data()?.comments
        const newComment: CommentType = {
          commenterUID: userID,
          date: Timestamp.fromDate(new Date()),
          content: commentContent,
          likes: [],
        }
        updateDoc(doc(db, 'posts', postID), {
          comments: [...comments, newComment],
        })
        setCommentContent('')
      })
    }
  }
  const renderComments = comments.map(cmt => (
    <Comment
      commenterUID={cmt.commenterUID}
      content={cmt.content}
      date={cmt.date}
      likes={cmt.likes}
    />
  ))

  const [isShowingModal, setModalVisibility] = useState<boolean>(false)

  return (
    <StyledSection
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      isLikedByCurrentUser={isLikedByCurrentUser ? 1 : 0}
      hasZeroComments={comments.length === 0 ? 1 : 0}
      isUserSignedIn={isUserSignedIn ? 1 : 0}
    >
      <div id='user-info'>
        <Link to={`/faekbook/${userID}`}>
          <img
            src={
              userID === currentUserInfo?.uid
                ? CUAvatarURL || defaultAvatar
                : postAvatarURL || defaultAvatar
            }
            alt='avatar'
          />
        </Link>
        <div className='info'>
          <div className='name'>
            <Link to={`/faekbook/${userID}`}>{full_name}</Link>
          </div>
          {`${format(fromUnixTime(date.seconds), 'yyyy, MMM d')} at ${format(
            fromUnixTime(date.seconds),
            'h:mm a'
          )}`}
        </div>
      </div>
      <main id='content'>{content}</main>
      <div id='num-likes-cmts'>
        <div className='likes'>
          {likes.length >= 1 && (
            <>
              <BlueBgLikeIcon />
              <span>{likes.length}</span>
            </>
          )}
        </div>
        <div className='comments'>
          {comments.length > 0 && (
            <>
              {comments.length} comment{comments.length > 1 && 's'}
            </>
          )}
        </div>
      </div>

      <div id='like-comment'>
        <div
          className='like'
          onClick={() => isUserSignedIn && toggleLikeThisPost()}
        >
          <AiFillLike className='icon' />
          <span>Like</span>
        </div>
        <div
          className='comments'
          onClick={() => {
            setIsShowingComments(!isShowingComments)
          }}
        >
          <GoComment className='icon' />
          <span>View Comments</span>
        </div>
      </div>
      {isShowingComments && <div id='comments'>{renderComments}</div>}
      {isUserSignedIn && (
        <form className='comment-input' onSubmit={postComment}>
          <img src={CUAvatarURL || defaultAvatar} alt='avatar' />
          <input
            value={commentContent}
            placeholder='Write a comment...'
            onChange={e => {
              setCommentContent(e.target.value)
            }}
          ></input>
        </form>
      )}
      {userID === currentUserInfo?.uid && (
        <div
          className='three-dots'
          onClick={() => setModalVisibility(!isShowingModal)}
        >
          <BsThreeDots className='icon' />
        </div>
      )}
      {isShowingModal && (
        <PostModal setModalVisibility={setModalVisibility} postID={postID} />
      )}
    </StyledSection>
  )
}

const StyledSection = styled('section')<{
  isDarkTheme: number
  isLikedByCurrentUser: number
  hasZeroComments: number
  isUserSignedIn: number
}>`
  position: relative;
  background-color: ${p => p.theme.main_bgclr};
  color: ${p => p.theme.font_lighter};
  width: 50rem;
  max-width: 100%;
  margin-inline: auto;
  border-radius: 1rem;
  margin-top: 2rem;
  padding-bottom: ${p => p.isUserSignedIn && '1.5rem'};
  & > .three-dots {
    position: absolute;
    right: 1.75rem;
    top: 1.5rem;
    padding: 0.75rem;
    border-radius: 50%;
    &:hover {
      background-color: ${p => p.theme.theme_toggler_bgclr};
      cursor: pointer;
    }
    .icon {
      font-size: 1.5rem;
    }
  }
  #user-info {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 1.5rem 1.5rem 0;
    img {
      height: 4rem;
      width: 4rem;
      ${imageObjectSettings}
    }
    .info {
      flex-grow: 1;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      height: 3.5rem;
      .name {
        a {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: ${p => p.theme.font};
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  #content {
    font-size: 1.5rem;
    padding: 1.5rem 1.5rem 0;
    word-wrap: break-word;
  }
  #num-likes-cmts {
    padding: 1.5rem 1.5rem 0;
    display: flex;
    justify-content: space-between;
    .likes {
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
    .comments {
      line-height: 1.75rem;
      font-size: 1.25rem;
    }
  }
  #like-comment {
    border-block: ${p => (p.isDarkTheme ? '#2f3031' : '#dddfe2')} 1px solid;
    border-bottom: ${p => p.isUserSignedIn || 'none'};
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
    }
    .like {
      color: ${p => p.isLikedByCurrentUser && '#036ee2'};
      color: ${p => p.isUserSignedIn || '#ebebebae'};
      &:hover {
        cursor: ${p => (p.isUserSignedIn ? 'pointer' : 'not-allowed')};
        background-color: ${p =>
          p.isUserSignedIn
            ? p.isDarkTheme
              ? '#64646471'
              : '#ebebebae'
            : 'unset'};
      }
    }
    .comments {
      color: ${p => p.hasZeroComments && '#ebebebae'};
      &:hover {
        cursor: ${p => (p.hasZeroComments ? 'not-allowed' : 'pointer')};
        background-color: ${p =>
          p.hasZeroComments
            ? 'unset'
            : p.isDarkTheme
            ? '#64646471'
            : '#ebebebae'};
      }
    }
  }
  #comments {
    padding: 1.5rem 1.5rem 0;
    margin-bottom: -0.75rem;
    display: flex;
    flex-flow: column;
    row-gap: 0.75rem;
  }
  form.comment-input {
    background-color: ${p => p.theme.main_bgclr};
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 1.5rem 1.5rem 0;
    img {
      height: 3.5rem;
      width: 3.5rem;
      background: ${p => p.theme.theme_toggler_bgclr};
      ${imageObjectSettings}
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
