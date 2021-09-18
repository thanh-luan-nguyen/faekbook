import { fromUnixTime } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Authen, DB } from '../../firebase'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import Post from './Post'
import WhatsOnYourMind from './WhatsOnYourMind'

const MainPage: React.FC<any> = () => {
  const { toggleState, isSignedIn } = useContext(Context)

  const [posts, setPosts] = useState<any>()
  useEffect(() => {
    DB.getPosts().then(posts => {
      if (posts) {
        posts.reverse()
        const allPosts = posts.map(p => (
          <Post
            key={p.date.seconds}
            full_name={p.full_name}
            avatar={p.avatar}
            date={fromUnixTime(p.date.seconds).toString()}
            content={p.content}
            likes={p.likes}
          />
        ))
        setPosts(allPosts)
      }
    })
  }, [])

  return (
    <StyledDiv theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      {isSignedIn && <WhatsOnYourMind />}
      {posts}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${p => p.theme.font};
`

export default MainPage
