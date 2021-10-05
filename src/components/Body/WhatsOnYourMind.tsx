import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../../utils/Context'
import { imageObjectSettings, themes } from '../../utils/themes'
import { defaultAvatar } from '../../utils/defaultPhotos'

export default function WhatsOnYourMind() {
  const { toggleState, dispatchDimBgModal, isUserSignedIn, CUAvatarURL } =
    useContext(Context)
  return (
    <StyledSection theme={toggleState.isDarkTheme ? themes.dark : themes.light}>
      <img
        src={isUserSignedIn ? CUAvatarURL || defaultAvatar : undefined}
        alt='avatar'
      />
      <div onClick={() => dispatchDimBgModal({ type: 'CREATE_POST' })}>
        What's on your mind?
      </div>
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
  img {
    height: 4rem;
    width: 4rem;
    background: ${p => p.theme.theme_toggler_bgclr};
    ${imageObjectSettings}
  }
  div {
    color: ${p => p.theme.font_lighter};
    flex-grow: 1;
    padding-left: 2rem;
    font-size: 1.5rem;
    height: 4rem;
    border-radius: 2rem;
    background: ${p => p.theme.whats_on_ur_mind_bgclr};
    display: flex;
    align-items: center;
    :hover {
      cursor: pointer;
      filter: brightness(${p => (p.theme.type === 'dark' ? '1.1' : '0.95')});
    }
  }
`
