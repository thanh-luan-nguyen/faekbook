export interface Comment {
  commenter: string
  content: string
  // likes: number
  date: Date
}

export interface Post {
  content: string
  likes: Array<string>
  date: Date
  comments: Array<Comment>
}

export interface Auth {
  // uid: string
  email: string
  password: string
}

export interface User {
  auth: Auth
  first_name?: string
  last_name?: string
  avatarURL?: string
  posts?: Array<Post>
  theme?: string
}

export interface Users {
  list: Array<User>
}

export interface LoginState {
  user: User
}

const Luan: User = {
  auth: {
    email: 'luan@gmail.com',
    password: 'luanluanluan',
  },
  first_name: 'Thanh Luan',
  last_name: 'Nguyen',
  avatarURL: 'luanAvatar',
  posts: [
    {
      date: new Date(2021, 5, 10),
      content: 'good day aint it',
      likes: ['hiep@gmail.com', 'long@gmail.com'],
      comments: [
        {
          date: new Date(2021, 5, 30),
          commenter: 'hiep@gmail.com',
          content: "that's right babe",
        },
      ],
    },
    {
      date: new Date(2021, 5, 20),
      content: 'today was shitty',
      likes: ['hiep@gmail.com'],
      comments: [
        {
          date: new Date(2021, 5, 30),
          commenter: 'hiep@gmail.com',
          content: "that's right babe",
        },
      ],
    },
  ],
  theme: 'dark',
}
const Hiep: User = {
  auth: {
    email: 'hiep@gmail.com',
    password: 'hiephiephiep',
  },
  first_name: 'Dinh Hiep',
  last_name: 'Ngo',
  avatarURL: 'hiepAvatar',
  posts: [],
  theme: 'light',
}
const Long: User = {
  auth: {
    email: 'long@gmail.com',
    password: 'long',
  },
  first_name: 'Thanh Long',
  last_name: 'Pham',
  avatarURL: 'longAvatar',
  posts: [],
  theme: 'dark',
}

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
//       avatarURL: 'avatar123',
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
