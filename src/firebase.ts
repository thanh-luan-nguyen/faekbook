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
import defaultCoverPhoto from './utils/images/default_cover_photo.gif'
import { Post, User } from './types/interface'

//  import { initializeApp } from 'firebase/app'
//  import {
//    getAuth,
//    onAuthStateChanged,
//    GoogleAuthProvider,
//    signInWithPopup,
//    signOut,
//  } from 'firebase/auth'
//  import {
//    getFirestore,
//    collection,
//    addDoc,
//    query,
//    orderBy,
//    limit,
//    onSnapshot,
//    setDoc,
//    updateDoc,
//    doc,
//    serverTimestamp,
//  } from 'firebase/firestore'
//  import {
//    getStorage,
//    ref,
//    uploadBytesResumable,
//    getDownloadURL,
//  } from 'firebase/storage'
//  import { getMessaging, getToken, onMessage } from 'firebase/messaging'
//  import { getPerformance } from 'firebase/performance'

//  import { getFirebaseConfig } from './firebase-config.js'

initializeApp({
  apiKey: 'AIzaSyAowcCuiyILtMdMP96n-RzUh2QVKvrN4OQ',
  authDomain: 'faekbook1-aa0f8.firebaseapp.com',
  projectId: 'faekbook1-aa0f8',
  storageBucket: 'faekbook1-aa0f8.appspot.com',
  messagingSenderId: '989041805197',
  appId: '1:989041805197:web:7661cc2571e3fb3317dfc4',
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
        console.log('SignUp: ', userCredential)
        const newUser: User = {
          uid: userCredential.user.uid,
          first_name: firstName,
          last_name: lastName,
          short_bio: 'my bio',
          avatar: defaultAvatar,
          is_dark_theme: false,
          cover_photo: defaultCoverPhoto,
        }
        DB.setUser(email, newUser)
      })
      .catch(err => {
        alert(`Sign up Error: ${err.code}. ${err.message}`)
      })
  }
  static signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
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
}

export class DB {
  static setUser(uid: string, payload: any) {
    setDoc(doc(db, 'users', uid), payload)
  }
  static updateUserInfo(uid: string, payload: any) {
    setDoc(doc(db, 'users', uid), payload, { merge: true })
  }
  static async getUser(uid: string) {
    const userSnap = await getDoc(doc(db, 'users', uid))
    return userSnap.data()
  }
  static setPost(unixSecond: number, post: Post) {
    setDoc(doc(db, 'posts', unixSecond.toString()), post, { merge: false })
  }
  static async getPosts(uid = '') {
    const postsCol = await getDocs(collection(db, 'posts'))
    const allPosts: DocumentData[] = []
    postsCol.forEach(post => allPosts.push(post.data()))
    return uid === '' ? allPosts : allPosts.filter(post => post.uid === uid)
  }
}
