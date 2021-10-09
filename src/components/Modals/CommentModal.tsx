import { useContext, useEffect, useRef } from 'react'
import Context from '../../utils/Context'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import { themes } from '../../styles/themes'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { deleteDoc, doc } from '@firebase/firestore'
import { db } from '../../firebaseConfig'

const CommentModal: React.FC<{
  commentID: string
  setIsEditting: any
  setIsShowingModal?: any
}> = ({ commentID, setIsEditting, setIsShowingModal }) => {
  const { toggleState } = useContext(Context)
  const modalNode = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
  const handleClick = (e: any) => {
    e.target === modalNode.current || setIsShowingModal(false)
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
          setIsEditting(true)
          setIsShowingModal(false)
        }}
      >
        <div className='icon-wrapper'>
          <FiEdit />
        </div>
        Edit
      </div>

      <div
        className='icon'
        onClick={e => {
          e.stopPropagation()
          setIsEditting(false)
          deleteDoc(doc(db, 'comments', commentID))
        }}
      >
        <div className='icon-wrapper'>
          <RiDeleteBin6Line />
        </div>
        Delete
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled('div')`
  position: absolute;
  right: -2rem;
  top: 5rem;
  width: 10rem;
  padding: 0.5rem;
  z-index: 100;
  border-radius: ${globalValues.dropdown_menu_bdr_rds};
  background: ${p => p.theme.main_bgclr};
  box-shadow: ${p => p.theme.bxShdw};
  font-size: 1rem;
  .icon {
    display: flex;
    cursor: pointer;
    border-radius: ${globalValues.dropdown_menu_bdr_rds};
    padding: 0.5rem;
    column-gap: 1rem;
    align-items: center;
    color: ${p => p.theme.font};
    font-weight: 700;
    :hover {
      background-color: ${p => p.theme.hover};
    }
    .icon-wrapper {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      background: ${p => p.theme.theme_toggler_bgclr};
      fill: ${p => p.theme.icon_color};
      font-size: 1.25rem;
      display: grid;
      place-items: center;
    }
  }
`

export default CommentModal
