import { doc, getDoc } from '@firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Storage, db } from '../../firebaseConfig'
import { imageObjectSettings } from '../../styles/globalValues'
import Context from '../../utils/Context'
import { defaultAvatar } from '../../utils/defaultPhotos'
import { themes } from '../../styles/themes'

const UserBubble: React.FC<{ userID: string }> = ({ userID }) => {
  const { toggleState } = useContext(Context)
  const [avatar, setAvatar] = useState<any>(null)
  const [userInfo, setUserInfo] = useState<any>(null)
  useEffect(() => {
    Storage.updatePhotoURL(userID, setAvatar)
    getDoc(doc(db, 'users', userID)).then(userSnap => {
      const user = userSnap.data()
      setUserInfo(user)
    })
  }, [])
  return (
    <Link to={`/faekbook/${userID}`}>
      <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
        <div className='name'>
          {userInfo?.first_name + ' ' + userInfo?.last_name}
        </div>
        <img src={avatar || defaultAvatar} alt='avatar' />
      </StyledDiv>
    </Link>
  )
}

const StyledDiv = styled('div')`
  :hover {
    cursor: pointer;
    .name {
      display: block;
    }
  }
  .name {
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5rem;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    background: ${p => p.theme.tooltip_bgclr};
    color: ${p => p.theme.tooltip_fontclr};
    z-index: 100;
    font-size: 1.25rem;
    font-weight: 600;
  }
  img {
    height: 4rem;
    width: 4rem;
    background: ${p => p.theme.theme_toggler_bgclr};
    ${imageObjectSettings};
  }
`

export default UserBubble
