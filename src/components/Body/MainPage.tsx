import { collection, orderBy, query } from '@firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { db, DB } from '../../firebaseConfig'
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
    const unsub = DB.setSnapshotListener(q, setAllPosts)
    console.log('main page renders')
    return () => {
      unsub()
    }
  }, [])

  const renderPosts = allPosts?.map((p: any) => (
    <Post
      key={p.postID}
      postID={p.postID}
      userID={p.userID}
      full_name={p.fullname}
      date={p.date}
      content={p.content}
      likes={p.likes}
      comments={p.comments}
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
  padding-bottom: 2rem;
`

export default MainPage
