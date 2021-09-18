import myAvatar from '../utils/images/picture_of_myself.jpg'
import coverPhoto from '../utils/images/cover_photo.jpg'
import LongAvatar from '../utils/images/Long.jpg'
import LongCoverPhoto from '../utils/images/Long_cover_photo.jpg'
import HiepAvatar from '../utils/images/Hiep.jpg'
import HiepCoverPhoto from '../utils/images/Hiep_cover_photo.jpg'

export interface Comment {
  date: Date
  commenter: string
  content: string
  likes: Array<string>
}

export interface Post {
  date: Date
  publisher: string
  full_name: string
  avatar: string
  content: string
  likes: Array<string>
  comments: Array<Comment>
}

export interface Auth {
  email: string
  password: string
}

export interface User {
  auth: Auth
  first_name: string
  last_name: string
  short_bio: string
  avatar: string
  theme: string
  cover_photo: string
}

export interface Users {
  list: Array<User>
}

export interface LoginState {
  user: User
}

// EXAMPLE

export const Luan: User = {
  auth: {
    email: 'thanhluannguyenxyz@gmail.com',
    password: 'iwiwlkiwljoo',
  },
  first_name: 'Thanh Luan',
  last_name: 'Nguyen',
  short_bio: 'Why did you change? Why did you bend and break?',
  avatar: myAvatar,
  theme: 'dark',
  cover_photo: coverPhoto,
}
export const Long: User = {
  auth: {
    email: 'long@gmail.com',
    password: 'longlonglong',
  },
  first_name: 'Nguyen',
  last_name: 'Thanh Long',
  short_bio: 'Why did you bend and break?',
  avatar: LongAvatar,
  theme: 'dark',
  cover_photo: LongCoverPhoto,
}
export const Hiep: User = {
  auth: {
    email: 'hiep@gmail.com',
    password: 'hiephiephiep',
  },
  first_name: 'Ngo',
  last_name: 'Dinh Hiep',
  short_bio: 'Why did you change?',
  avatar: HiepAvatar,
  theme: 'light',
  cover_photo: HiepCoverPhoto,
}

export const posts: Array<Post> = [
  {
    publisher: 'thanhluannguyenxyz@gmail.com',
    full_name: 'Thanh Luan Nguyen',
    avatar: myAvatar,
    content:
      'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo;j cjiowac aweijoc aeij cvih vcaiv asiujv aihpv auiovnafiupvn asiv aih vashi vasji ai vasfijhv nasi;v awrioc awicv aijhv asfihvh ',
    likes: ['hiep@gmail.com', 'thanhluannguyenxyz@gmail.com'],
    date: new Date(2021, 5, 31, 8, 30),
    comments: [
      {
        date: new Date(2021, 5, 31, 8, 45),
        commenter: 'hiep@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['thanhluannguyenxyz@gmail.com'],
      },
      {
        date: new Date(2021, 5, 31, 9, 45),
        commenter: 'long@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['hiep@gmail.com'],
      },
    ],
  },
  {
    publisher: 'thanhluannguyenxyz@gmail.com',
    full_name: 'Thanh Luan Nguyen',
    avatar: myAvatar,
    content: 'FDI Mĩ bỏ chạy tao chờ đến EU ... nên tao ghim lại bài báo này',
    likes: ['long@gmail.com'],
    date: new Date(2021, 6, 10, 8, 30),
    comments: [
      {
        date: new Date(2021, 6, 10, 8, 45),
        commenter: 'hiep@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['thanhluannguyenxyz@gmail.com'],
      },
      {
        date: new Date(2021, 6, 10, 9, 45),
        commenter: 'long@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['hiep@gmail.com'],
      },
    ],
  },
  {
    publisher: 'hiep@gmail.com',
    full_name: 'Hiep',
    avatar: HiepAvatar,
    content:
      '先行き不安定な経済で日々変わりゆく正しい資産形成をライフシミュレーションで予測！３つの正しいを学ぶお金のセミナー ',
    likes: [],
    date: new Date(2021, 10, 15, 8, 30),
    comments: [
      {
        date: new Date(2021, 10, 15, 8, 45),
        commenter: '',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['hiep@gmail.com'],
      },
      {
        date: new Date(2021, 10, 15, 9, 45),
        commenter: 'thanhluannguyenxyz@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['long@gmail.com'],
      },
    ],
  },
  {
    publisher: 'hiep@gmail.com',
    full_name: 'Hiep',
    avatar: HiepAvatar,
    content:
      'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo;j cjiowac aweijoc aeij cvih vcaiv asiujv aihpv auiovnafiupvn asiv aih vashi vasji ai vasfijhv nasi;v awrioc awicv aijhv asfihvh ',
    likes: ['hiep@gmail.com', 'thanhluannguyenxyz@gmail.com'],
    date: new Date(2021, 7, 31, 8, 30),
    comments: [
      {
        date: new Date(2021, 7, 31, 8, 45),
        commenter: 'hiep@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['thanhluannguyenxyz@gmail.com'],
      },
      {
        date: new Date(2021, 7, 31, 9, 45),
        commenter: 'long@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['hiep@gmail.com'],
      },
    ],
  },
  {
    publisher: 'long@gmail.com',
    full_name: 'Long',
    avatar: LongAvatar,
    content:
      'avengers avengers avengers avengers avengers avengers avengers avengers',
    likes: ['thanhluannguyenxyz@gmail.com'],
    date: new Date(2021, 3, 31, 8, 30),
    comments: [
      {
        date: new Date(2021, 8, 31, 8, 45),
        commenter: 'thanhluannguyenxyz@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['thanhluannguyenxyz@gmail.com'],
      },
      {
        date: new Date(2021, 8, 31, 9, 45),
        commenter: 'long@gmail.com',
        content:
          'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
        likes: ['hiep@gmail.com'],
      },
    ],
  },
]
// const Hiep: User = {
//   auth: {
//     email: 'hiep@gmail.com',
//     password: 'hiephiephiep',
//   },
//   first_name: 'Dinh Hiep',
//   last_name: 'Ngo',
//   avatar: 'hiepAvatar',
//   posts: [],
//   theme: 'light',
// }
// const Long: User = {
//   auth: {
//     email: 'long@gmail.com',
//     password: 'long',
//   },
//   first_name: 'Thanh Long',
//   last_name: 'Pham',
//   avatar: 'longAvatar',
//   posts: [],
//   theme: 'dark',
// }

// const users: Users = {
//   list: [
//     {
//       auth: {
//         // uid: 'abcxyz',
//         email: 'mail@gmail.com',
//         password: 'passpass',
//       },
//       first_name: 'Thanh Luan',
//       last_name: 'Nguyen',
//       avatar: 'avatar123',
//       posts: [
//         {
//           content: 'nice day',
//           likes: 4,
//           date: new Date(2021, 8, 18),
//           comments: [
//             {
//               commenter: 'Kate Winston',
//               content: 'yeah it is',
//               likes: 2,
//               date: new Date(2021, 8, 18),
//             },
//           ],
//         },
//       ],
//       theme: 'dark',
//     },
//   ],
// }
