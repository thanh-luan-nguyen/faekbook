import myAvatar from '../utils/images/picture_of_myself.jpg'
import coverPhoto from '../utils/images/cover_photo.jpg'
import LongAvatar from '../utils/images/Long.jpg'
import LongCoverPhoto from '../utils/images/Long_cover_photo.jpg'
import HiepAvatar from '../utils/images/Hiep.jpg'
import HiepCoverPhoto from '../utils/images/Hiep_cover_photo.jpg'

export interface Comment {
  commenterUID: string
  date: Date
  content: string
  likes: Array<string>
}

export interface Post {
  uid: string
  fullname: string
  avatar: string
  date: number
  content: string
  likes: Array<string>
  comments: Array<Comment>
}

export interface User {
  uid: string
  first_name: string
  last_name: string
  short_bio: string
  avatar: string
  is_dark_theme: boolean
  cover_photo: string
}

export interface Users {
  list: Array<User>
}

// EXAMPLE

export const Luan: User = {
  uid: 'KyZEVL64zbZqU3H4CG7zzx0tcHk2',
  first_name: 'Nguyen',
  last_name: 'Thanh Luan',
  short_bio: 'Why did you change? Why did you bend and break?',
  avatar: myAvatar,
  is_dark_theme: true,
  cover_photo: coverPhoto,
}
export const Long: User = {
  uid: '9szNArJnruN0LzqeT2iuzL8qgHl1',
  first_name: 'Nguyen',
  last_name: 'Thanh Long',
  short_bio: 'Why did you bend and break?',
  avatar: LongAvatar,
  is_dark_theme: true,
  cover_photo: LongCoverPhoto,
}
export const Hiep: User = {
  uid: 'jOChZLcqLSh05KiOFjPku0LSXBp1',
  first_name: 'Ngo',
  last_name: 'Dinh Hiep',
  short_bio: 'Why did you change?',
  avatar: HiepAvatar,
  is_dark_theme: false,
  cover_photo: HiepCoverPhoto,
}

// export const posts: Array<Post> = [
//   {
//     uid: 'KyZEVL64zbZqU3H4CG7zzx0tcHk2',
//     fullname: 'Nguyen Thanh Luan',
//     avatar: myAvatar,
//     content:
//       'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo;j cjiowac aweijoc aeij cvih vcaiv asiujv aihpv auiovnafiupvn asiv aih vashi vasji ai vasfijhv nasi;v awrioc awicv aijhv asfihvh ',
//     likes: ['jOChZLcqLSh05KiOFjPku0LSXBp1', 'KyZEVL64zbZqU3H4CG7zzx0tcHk2'],
//     date: new Date(2021, 5, 31, 8, 30),
//     comments: [
//       {
//         date: new Date(2021, 5, 31, 8, 45),
//         commenterUID: 'jOChZLcqLSh05KiOFjPku0LSXBp1',
//         content:
//           'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
//         likes: ['KyZEVL64zbZqU3H4CG7zzx0tcHk2'],
//       },
//       {
//         date: new Date(2021, 5, 31, 9, 45),
//         commenterUID: '9szNArJnruN0LzqeT2iuzL8qgHl1',
//         content:
//           'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
//         likes: ['jOChZLcqLSh05KiOFjPku0LSXBp1'],
//       },
//     ],
//   },

//   {
//     uid: 'jOChZLcqLSh05KiOFjPku0LSXBp1',
//     fullname: 'Ngo Dinh Hiep',
//     avatar: HiepAvatar,
//     content:
//       'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo;j cjiowac aweijoc aeij cvih vcaiv asiujv aihpv auiovnafiupvn asiv aih vashi vasji ai vasfijhv nasi;v awrioc awicv aijhv asfihvh ',
//     likes: ['jOChZLcqLSh05KiOFjPku0LSXBp1', 'KyZEVL64zbZqU3H4CG7zzx0tcHk2'],
//     date: new Date(2021, 7, 31, 8, 30),
//     comments: [
//       {
//         date: new Date(2021, 7, 31, 8, 45),
//         commenterUID: 'jOChZLcqLSh05KiOFjPku0LSXBp1',
//         content:
//           'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
//         likes: ['KyZEVL64zbZqU3H4CG7zzx0tcHk2'],
//       },
//       {
//         date: new Date(2021, 7, 31, 9, 45),
//         commenterUID: '9szNArJnruN0LzqeT2iuzL8qgHl1',
//         content:
//           'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
//         likes: ['jOChZLcqLSh05KiOFjPku0LSXBp1'],
//       },
//     ],
//   },
//   {
//     uid: '9szNArJnruN0LzqeT2iuzL8qgHl1',
//     fullname: 'Nguyen Thanh Long',
//     avatar: LongAvatar,
//     content:
//       'avengers avengers avengers avengers avengers avengers avengers avengers',
//     likes: ['KyZEVL64zbZqU3H4CG7zzx0tcHk2'],
//     date: new Date(2021, 3, 31, 8, 30),
//     comments: [
//       {
//         date: new Date(2021, 8, 31, 8, 45),
//         commenterUID: 'KyZEVL64zbZqU3H4CG7zzx0tcHk2',
//         content:
//           'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
//         likes: ['KyZEVL64zbZqU3H4CG7zzx0tcHk2'],
//       },
//       {
//         date: new Date(2021, 8, 31, 9, 45),
//         commenterUID: '9szNArJnruN0LzqeT2iuzL8qgHl1',
//         content:
//           'aoisdjoia joiajoisadvjoai jaoi mao af oiuas ioans osa oanv ias vias vsi vih vasjiowmnawo',
//         likes: ['jOChZLcqLSh05KiOFjPku0LSXBp1'],
//       },
//     ],
//   },
// ]
// const Hiep: User = {
//   auth: {
//     email: 'jOChZLcqLSh05KiOFjPku0LSXBp1',
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
//     email: '9szNArJnruN0LzqeT2iuzL8qgHl1',
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
//               commenterUID: 'Kate Winston',
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
