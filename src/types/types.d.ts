import { Timestamp } from '@firebase/firestore'

export type CommentType = {
  postID: string
  commenterID: string
  date: Timestamp
  content: string
  likes: Array<string>
}

export type LikeType = {
  avatarURL: string
  full_name: string
  userID: string
}

export type PostType = {
  fullname: string
  userID: string
  postID?: string
  date: Timestamp
  content: string
  likes: Array<LikeType>
  photo: { url: string; id: string }
  comments: Array<string>
  is_profile_page?: boolean
}

export type User = {
  uid: string
  first_name: string
  last_name: string
  short_bio: string
  is_dark_theme: boolean
}

export type Users = {
  list: Array<User>
}
