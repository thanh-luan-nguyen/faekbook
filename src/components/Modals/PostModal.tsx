import { useContext, useEffect, useRef } from 'react'
import Context from '../../utils/Context'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import { themes } from '../../utils/themes'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { deleteDoc, doc } from '@firebase/firestore'
import { db, DB } from '../../firebaseConfig'

const PostModal: React.FC<{
  postID: string
  setIsShowingModal: any
  isShowingModal: boolean
  postContent: string
}> = ({ postID, setIsShowingModal, isShowingModal, postContent }) => {
  const { toggleState, dispatchDimBgModal, setEdittedPostContent } =
    useContext(Context)
  const modalNode = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  const handleClick = (e: any) => {
    e.target === modalNode.current || setIsShowingModal(!isShowingModal)
  }
  return (
    <StyledDiv
      ref={modalNode}
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
    >
      <div
        className='icon'
        onClick={e => {
          e.stopPropagation()
          setIsShowingModal(false)
          if (postContent) {
            setEdittedPostContent(postContent)
            console.log(postContent)
            dispatchDimBgModal({ type: 'EDIT_POST' })
          }
        }}
      >
        <div className='icon-wrapper'>
          <FiEdit />
        </div>
        Edit Post
      </div>

      <div
        className='icon'
        onClick={e => {
          e.stopPropagation()
          setIsShowingModal(false)
          deleteDoc(doc(db, 'posts', postID))
        }}
      >
        <div className='icon-wrapper'>
          <RiDeleteBin6Line />
        </div>
        Delete Post
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')`
  position: absolute;
  right: 1rem;
  top: 5rem;
  width: 20rem;
  padding: 0.5rem;
  z-index: 100;
  border-radius: ${globalValues.dropdown_menu_bdr_rds};
  background: ${p => p.theme.main_bgclr};
  box-shadow: ${p => p.theme.bxShdw};
  /* profile, edit and delete */
  .icon {
    display: flex;
    cursor: pointer;
    border-radius: ${globalValues.dropdown_menu_bdr_rds};
    padding: 0.5rem;
    column-gap: 1rem;
    align-items: center;
    color: ${p => p.theme.font};
    font-weight: 700;
    &:hover {
      background-color: ${p => p.theme.hover};
    }
    .icon-wrapper {
      height: ${globalValues.navbar_elements_height};
      width: ${globalValues.navbar_elements_height};
      border-radius: 50%;
      font-size: 2rem;
      background: ${p => p.theme.theme_toggler_bgclr};
      fill: ${p => p.theme.icon_color};
      font-size: 1.75rem;
      display: grid;
      place-items: center;
    }
  }
`

export default PostModal
