import { DB } from '../firebase'
import { Post } from '../types/interface'

export const toggleReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'DARK_THEME':
      return { ...state, isDarkTheme: true }
    case 'LIGHT_THEME':
      return { ...state, isDarkTheme: false }
    case 'TOGGLE_THEME':
      return { ...state, isDarkTheme: !state.isDarkTheme }
    case 'TOGGLE_DROP_DOWN_MENU':
      return { ...state, dropDownMenuIsVisible: !state.dropDownMenuIsVisible }
    default:
      return state
  }
}

export const isSignedInReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true
    case 'SIGN_OUT':
      return false
    default:
      return state
  }
}

export const authenModalReducer = (
  state = { action: 'close modals' },
  action: any
) => {
  switch (action.type) {
    case 'LOG_IN':
      return { action: 'show login modal' }
    case 'SIGN_UP':
      return { action: 'show signup modal' }
    case 'CREATE_POST':
      return { action: 'show create-post modal' }
    case 'NONE':
      return { action: 'close modals' }
    default:
      return state
  }
}

// export const currentUserEmailReducer = (state: string | null, action: any) => {
//   switch (action.type) {
//     case 'SET_CURRENT_USER_EMAIL':
//       return action.payload
//     case 'LOG_OUT':
//       return null
//     default:
//       return state
//   }
// }

// export const userReducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'ADD_POST':
//       const newPost: Post = {
//         date: new Date(),
//         content: action.payload,
//         likes: 0,
//         comments: [],
//       }
//       const updatedPosts = { ...state.posts, newPost }
//       DB.setUser('thanhluannguyenxyz@gmail.com', updatedPosts)
//       return { ...state, posts: updatedPosts }
//   }
// }
