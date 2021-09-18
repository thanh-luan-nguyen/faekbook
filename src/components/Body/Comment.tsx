import myAvatar from '../../utils/images/picture_of_myself.jpg'
import { BsThreeDots } from 'react-icons/bs'
import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../../utils/Context'
import { themes } from '../../utils/themes'

const Comment: React.FC<{ username: string; content: string; likes: number }> =
  ({ username, content, likes }) => {
    const { toggleState } = useContext(Context)
    return (
      <StyledDiv
        theme={toggleState.isDarkTheme ? themes.dark : themes.light}
        three_dots={BsThreeDots}
      >
        <img src={myAvatar} alt='' />

        <div className='middle'>
          <div className='top'>
            <div className='bubble'>
              <div className='username'>{username}</div>
              <div className='content'>{content}</div>
            </div>
            <div className='three-dots'>
              <BsThreeDots className='icon' />
            </div>
          </div>
          <div className='like'>Like</div>
        </div>
      </StyledDiv>
    )
  }

const StyledDiv = styled('div')<{ three_dots: any }>`
  display: flex;
  column-gap: 1rem;
  img {
    height: 3.5rem;
    width: 3.5rem;
  }
  .middle {
    .top {
      display: flex;
      .bubble {
        padding: 1rem;
        border-radius: 1rem;
        background: ${p => p.theme.whats_on_ur_mind_bgclr};
        font-size: 1.15rem;
        color: ${p => p.theme.font};
        max-width: 95%;
        .username {
          font-weight: 500;
          padding-bottom: 0.25rem;
        }
        .content {
          line-height: 1.4;
        }
      }
      .three-dots {
        display: grid;
        place-items: center;
        width: 1rem;
        margin-left: 1rem;
        .icon {
          display: none;
        }
        &:hover {
          .icon {
            display: block;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .like {
      padding: 0.5rem 0 0 1rem;
      font-weight: 600;
    }
  }
`

export default Comment
