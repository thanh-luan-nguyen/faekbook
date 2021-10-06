import styled, { css } from 'styled-components'

export const themes = {
  light: {
    type: 'light',

    bxShdw:
      'rgba(50, 50, 93, 0.25) 0 0 5px -1px, rgba(0, 0, 0, 0.3) 0 0 3px -1px',

    main_bgclr: '#fff',
    nav_btm_brdr_clr: '#fff',
    // fb_icon: '#000',
    font: '#050505',
    font_lighter: '#65676b',
    // menu
    divider_clr: '#ced0d4',
    hover: '#d4d4d434',
    icon_color: '#1d1f23',
    theme_toggler_bgclr: '#e6e8ed',
    theme_toggler_bgclr_active: '#E7F3FF',
    theme_toggler_icon_active: '#0571ED',

    // body
    body: '#f0f2f5',
    like_icon_bgclr: '#fff',
    avatar_pic_cam_icon_bgclr: '#e4e6eb',

    whats_on_ur_mind_bgclr: '#F0F2F5',
  },
  dark: {
    type: 'dark',

    bxShdw:
      'rgba(255, 255, 255) 0 0 5px -1px, rgba(255, 255, 255) 0 0 3px -1px',

    main_bgclr: '#242526',
    nav_btm_brdr_clr: '#393a3b',
    // fb_icon: '#fff',
    font: '#e4e6eb',
    font_lighter: '#b0b3b8',
    // menu
    divider_clr: '#3e4042',
    hover: '#ffffff45',
    icon_color: '#e4e6ea',
    theme_toggler_bgclr: '#4e5052',
    theme_toggler_bgclr_active: '#263951',
    theme_toggler_icon_active: '#2D86FF',
    // body
    body: '#18191a',
    like_icon_bgclr: '#3a3b3c',
    avatar_pic_cam_icon_bgclr: '#3a3b3c',

    whats_on_ur_mind_bgclr: '#3a3b3c',
  },
}

export const imageObjectSettings = css`
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: 50% 20%;
`

export const customizedScrollBar = css`
  ::-webkit-scrollbar {
    width: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.font_lighter};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    margin-block: 0.5rem;
  }
`
