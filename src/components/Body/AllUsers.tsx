import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { themes } from '../../styles/themes'
import { customizedScrollBar } from '../../styles/globalValues'
import UserBubble from './UserBubble'
import { collection, getDocs, query } from '@firebase/firestore'
import { db, DB } from '../../firebaseConfig'

export default function AllUsers() {
  const { toggleState, isUserSignedIn } = useContext(Context)
  const [allUsers, setAllUsers] = useState<any>(null)
  useEffect(() => {
    const usersRef = collection(db, 'users')
    const unsub = DB.setSnapshotListener(query(usersRef), setAllUsers)
    console.log('AllUsers render')
    return () => {
      unsub()
    }
  }, [isUserSignedIn])
  const renderUsers = allUsers?.map((u: any) => (
    <UserBubble key={u.uid} userID={u.uid} />
  ))
  return (
    <StyledSection theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      {renderUsers}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background-color: ${p => p.theme.main_bgclr};
  width: 50rem;
  max-width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-inline: auto;
  border-radius: 1rem;
  margin-top: 2rem;
  overflow-y: auto;
  ${customizedScrollBar};
`
