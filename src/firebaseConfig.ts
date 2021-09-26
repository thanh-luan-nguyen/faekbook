import { initializeApp } from 'firebase/app'
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from 'firebase/storage'
import { Post, User } from './types/interface'

const app = initializeApp({
  apiKey: 'AIzaSyAowcCuiyILtMdMP96n-RzUh2QVKvrN4OQ',
  authDomain: 'faekbook1-aa0f8.firebaseapp.com',
  projectId: 'faekbook1-aa0f8',
  storageBucket: 'faekbook1-aa0f8.appspot.com',
  messagingSenderId: '989041805197',
  appId: '1:989041805197:web:7661cc2571e3fb3317dfc4',
})

export const auth = getAuth()

export const db = getFirestore()

export const storage = getStorage(app)

export class Authen {
  static signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    callback: any
  ) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('SignUp: ', userCredential)
        const uid = userCredential.user.uid
        const newUser: User = {
          uid: uid,
          first_name: firstName,
          last_name: lastName,
          short_bio: 'my bio',
          is_dark_theme: false,
        }
        // const avatarRef = ref(storage, `users/${uid}/avatar`)
        // const coverImgRef = ref(storage, `users/${uid}/cover_image`)
        // const defaultCoverImageURL =
        //   'https://firebasestorage.googleapis.com/v0/b/faekbook1-aa0f8.appspot.com/o/defaults%2FdefaultCoverImage.gif?alt=media&token=458194b5-739b-4fd8-ae77-13ba5fb5dc13'
        // uploadString(coverImgRef, defaultCoverImageURL, 'data_url')
        DB.setUser(uid, newUser)
        Authen.signIn(email, password, callback)
      })
      .catch(err => {
        alert(`Sign up Error: ${err.code}. ${err.message}`)
      })
  }
  static signIn(email: string, password: string, callback: any) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        callback()
        console.log(
          `User with email ${userCredential.user.email} has logged in successfully`
        )
      })
      .catch(err => alert(`Sign in Error: ${err.code}. ${err.message}`))
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
    updateDoc(doc(db, 'users', uid), payload)
  }
  static async getUser(uid: string) {
    const userSnap = await getDoc(doc(db, 'users', uid))
    return userSnap.data()
  }
  static setPost(unixSecond: number, post: Post) {
    setDoc(doc(db, 'posts', unixSecond.toString()), post, { merge: false })
  }
}

export class Storage {
  static setPhotosURL(uid: string, setAvatarURL: any, setCoverImageURL?: any) {
    const avatarRef = ref(storage, `users/${uid}/avatar`)
    const coverImageRef = ref(storage, `users/${uid}/cover_image`)
    getDownloadURL(avatarRef)
      .then(url => {
        setAvatarURL(url)
      })
      .catch(e => console.log(e))
    setCoverImageURL &&
      getDownloadURL(coverImageRef)
        .then(url => setCoverImageURL(url))
        .catch(e => console.log(e))
  }
}
