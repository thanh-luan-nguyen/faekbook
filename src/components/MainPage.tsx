import { collection, getDocs, limit, orderBy, query } from '@firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { db, DB } from '../firebaseConfig'
import Context from '../utils/Context'
import ShowMoreButton from '../utils/ShowMoreButton'
import { themes } from '../styles/themes'
import AllUsers from './AllUsers'
import Post from './Post'
import WhatsOnYourMind from './WhatsOnYourMind'

const MainPage: React.FC<any> = () => {
  const { toggleState, isUserSignedIn } = useContext(Context)
  const [allPosts, setAllPosts] = useState<any>(null)
  const [postsNumLimit, setPostsNumLimit] = useState<number>(5)
  const [hasShownAllPosts, setHasShownAllPosts] = useState<boolean>(false)

  useEffect(() => {
    getDocs(collection(db, 'posts')).then(posts => {
      postsNumLimit >= posts.size
        ? setHasShownAllPosts(true)
        : setHasShownAllPosts(false)
    })
    console.log('render mainpage limit posts')
  }, [postsNumLimit, allPosts])

  //! RENDER POSTS */
  useEffect(() => {
    const postsRef = collection(db, 'posts')
    const q = query(postsRef, orderBy('date', 'desc'), limit(postsNumLimit))
    const unsub = DB.setSnapshotListener(q, setAllPosts)
    console.log('MainPage renders')
    return () => {
      unsub()
    }
  }, [postsNumLimit])
  const renderPosts = allPosts?.map((p: any) => (
    <Post
      key={p.id}
      postID={p.id}
      userID={p.userID}
      fullname={p.fullname}
      date={p.date}
      content={p.content}
      likes={p.likes}
      photo={p.photo}
      comments={p.comments}
    />
  ))
  //! RENDER POSTS END*/

  return (
    <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      {isUserSignedIn && <WhatsOnYourMind />}
      <AllUsers />
      {renderPosts}
      {hasShownAllPosts || (
        <ShowMoreButton
          addMorePosts={() => {
            setPostsNumLimit(postsNumLimit + 5)
          }}
        />
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${p => p.theme.font};
  padding-bottom: 3rem;
  display: flex;
  flex-flow: column;
`

export default MainPage
