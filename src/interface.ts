import { Timestamp } from '@firebase/firestore'

export interface CommentType {
  postID: string
  commenterID: string
  date: Timestamp
  content: string
  likes: Array<string>
}

export interface PostType {
  userID: string
  fullname: string
  date: Timestamp
  content: string
  likes: Array<string>
  photo: string
  comments: Array<CommentType>
}

export interface User {
  uid: string
  first_name: string
  last_name: string
  short_bio: string
  is_dark_theme: boolean
}

export interface Users {
  list: Array<User>
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
