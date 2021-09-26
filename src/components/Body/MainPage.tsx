import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from '@firebase/firestore'
import { async } from '@firebase/util'
import { fromUnixTime } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Authen, db, DB } from '../../firebaseConfig'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import Post from './Post'
import WhatsOnYourMind from './WhatsOnYourMind'

const MainPage: React.FC<any> = () => {
  const { toggleState, isUserSignedIn } = useContext(Context)

  const [allPosts, setAllPosts] = useState<any>(null)

  useEffect(() => {
    const postsRef = collection(db, 'posts')
    const q = query(postsRef, orderBy('date', 'desc'))
    const unsub = onSnapshot(q, (posts: any) => {
      const postsSnapshot: DocumentData[] = []
      posts.forEach((p: any) => postsSnapshot.push(p.data()))
      setAllPosts(postsSnapshot)
    })
    return () => {
      unsub()
    }
  }, [])

  const renderPosts = allPosts?.map((p: any) => (
    <Post
      key={p.date}
      full_name={p.fullname}
      uid={p.uid}
      date={p.date}
      content={p.content}
      likes={p.likes}
      
    />
  ))
  return (
    <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      {isUserSignedIn && <WhatsOnYourMind />}
      {renderPosts}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${p => p.theme.font};
`

export default MainPage
