import { initializeApp } from 'firebase/app'
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import defaultAvatar from './utils/images/default_user.png'
import defaultCoverPhoto from './utils/images/default_cover_photo.png'
import { Post } from './types/interface'

initializeApp({
  apiKey: 'AIzaSyD5ADlnZW_bL1r3q3w2ckoqqhl4cjLU7B8',
  authDomain: 'faekbook-35cc8.firebaseapp.com',
  databaseURL:
    'https://faekbook-35cc8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'faekbook-35cc8',
  storageBucket: 'faekbook-35cc8.appspot.com',
  messagingSenderId: '692722345820',
  appId: '1:692722345820:web:964baa89b10843e20c8399',
  measurementId: 'G-E0CJXD28RC',
})

export const auth = getAuth()

export const db = getFirestore()

export class Authen {
  static signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('signUp', userCredential)
        const newUser = {
          auth: {
            email: email,
            password: password,
          },
          first_name: firstName,
          last_name: lastName,
          short_bio: '',
          avatar: defaultAvatar,
          theme: 'light',
          cover_photo: '',
        }
        DB.setUser(email, newUser)
      })
      .catch(err => {
        alert(`Sign up Error: ${err.code}. ${err.message}`)
      })
  }
  static signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(
          `User with email ${userCredential.user.email} has logged in successfully`
        )
      })
      .catch(err => {
        alert(`Sign in Error: ${err.code}. ${err.message}`)
      })
  }
  static signOut() {
    signOut(auth)
      .then(() => {
        console.log('signed out successfully')
      })
      .catch(e => {
        alert('Signout failed: ' + e)
      })
  }
  static getUserEmail() {
    const user = auth.currentUser
    if (user !== null) {
      const email = user.email
      return email
    }
  }
  static handleSignInOutState(callback1: any, callback2 = () => {}) {
    onAuthStateChanged(auth, user => {
      if (user) {
        callback1()
      } else {
        callback2()
      }
    })
  }
  static setCurrentUserStateInfoToNull(callback: any) {
    onAuthStateChanged(auth, user => {
      if (!user) {
        callback()
      }
    })
  }
}

export class DB {
  static setUser(email: string, data: any) {
    setDoc(doc(db, 'users', email), data, {
      merge: true,
    })
  }
  static async getUser(email: string) {
    const userSnap = await getDoc(doc(db, 'users', email))
    return userSnap.data()
  }
  static setPost(unixSecond: string, post: Post) {
    setDoc(doc(db, 'posts', unixSecond), post, { merge: false })
  }
  static async getPosts(email = '') {
    const postsCol = await getDocs(collection(db, 'posts'))
    const allPosts: DocumentData[] = []
    postsCol.forEach(post => allPosts.push(post.data()))
    return email === ''
      ? allPosts
      : allPosts.filter(post => post.publisher === email)
  }
}
