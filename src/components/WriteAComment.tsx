import { doc, updateDoc } from '@firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebaseConfig'
import Context from '../utils/Context'
import { themes } from '../styles/themes'

const WriteAComment: React.FC<{
  commentID?: string
  content?: string
  setIsEditting?: any
}> = ({ commentID, content, setIsEditting }) => {
  const { toggleState } = useContext(Context)
  const [edittingContent, setEdittingContent] = useState<string>('')
  useEffect(() => {
    content && setEdittingContent(content)
  }, [content])

  const updatePost = (e: any) => {
    if (e.keyCode === 13) {
      if (commentID) {
        updateDoc(doc(db, 'comments', commentID), { content: edittingContent })
        setIsEditting(false)
      }
    }
  }

  return (
    <StyledInput
      theme={toggleState.isDarkTheme ? themes.dark : themes.light}
      isDarkTheme={toggleState.isDarkTheme ? 1 : 0}
      value={edittingContent}
      placeholder='Write a comment...'
      onChange={e => {
        setEdittingContent(e.target.value)
      }}
      onKeyDown={updatePost}
      autoFocus
      onFocus={e =>
        e.currentTarget.setSelectionRange(
          e.currentTarget.value.length,
          e.currentTarget.value.length
        )
      }
    ></StyledInput>
  )
}

const StyledInput = styled('input')<{ isDarkTheme: number }>`
  font-family: inherit;
  color: ${p => p.theme.font};
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  border-radius: 2rem;
  background: ${p => p.theme.whats_on_ur_mind_bgclr};
  display: flex;
  align-items: center;
  :hover {
    cursor: text;
    filter: brightness(${p => (p.isDarkTheme ? '1.1' : '0.95')});
  }
  ::placeholder {
    color: ${p => p.theme.font_lighter};
  }
`

export default WriteAComment
