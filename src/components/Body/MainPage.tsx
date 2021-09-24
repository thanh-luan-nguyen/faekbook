import { async } from '@firebase/util'
import { fromUnixTime } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Authen, DB } from '../../firebase'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'
import Post from './Post'
import WhatsOnYourMind from './WhatsOnYourMind'

const MainPage: React.FC<any> = () => {
  const { toggleState, isUserSignedIn, allPosts } = useContext(Context)

  const renderPosts = allPosts?.map((p: any) => (
    <Post
      key={p.date}
      // id={p.date}
      full_name={p.fullname}
      avatar={p.avatar}
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
