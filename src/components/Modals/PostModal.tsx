import { useContext } from 'react'
import Context from '../../utils/Context'
import styled from 'styled-components'
import globalValues from '../../styles/globalValues'
import { themes } from '../../utils/themes'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { deleteDoc, doc } from '@firebase/firestore'
import { db, DB } from '../../firebaseConfig'

const PostModal: React.FC<{ setModalVisibility: any; postID: string }> = ({
  setModalVisibility,
  postID,
}) => {
  const { toggleState } = useContext(Context)

  return (
    <StyledDiv
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      onClick={e => e.stopPropagation()}
    >
      <div
        className='icon'
        onClick={() => {
          setModalVisibility(false)
        }}
      >
        <div className='icon-wrapper'>
          <FiEdit />
        </div>
        Edit Post
      </div>

      <div
        className='icon'
        onClick={() => {
          setModalVisibility(false)
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
