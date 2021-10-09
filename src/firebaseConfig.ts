import { DocumentData, getDoc, onSnapshot } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { User } from './interface'

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
        const uid = userCredential.user.uid
        const newUser: User = {
          uid: uid,
          first_name: firstName,
          last_name: lastName,
          short_bio: 'my bio',
          is_dark_theme: false,
        }
        DB.setUser(uid, newUser)
        Authen.signIn(email, password, callback)
        console.log('Signed up successfully: ', userCredential)
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
        console.log('Signed out successfully')
      })
      .catch(e => {
        alert('Signout failed: ' + e)
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
  static setSnapshotListener(q: any, setStateCallback: any) {
    return onSnapshot(q, (docs: any) => {
      const docsArray: DocumentData[] = []
      docs.forEach((p: any) => docsArray.push({ ...p.data(), id: p.id }))
      setStateCallback(docsArray)
    })
  }
  static like(liker: string, liked: string, collection: string) {
    getDoc(doc(db, collection, liked)).then(async p => {
      const likes = p.data()?.likes
      const likesUserIDs = likes.map((like: any) => like.userID)

      const avatarURL = await getDownloadURL(
        ref(storage, `users/${liker}/avatar`)
      )
      const userSnapshot = await getDoc(doc(db, 'users', liker))
      const user = userSnapshot?.data()

      likesUserIDs.includes(liker)
        ? likes.splice(likesUserIDs.indexOf(liker), 1)
        : likes.push({
            userID: liker,
            full_name: `${user?.first_name} ${user?.last_name}`,
            avatarURL: avatarURL,
          })
      updateDoc(doc(db, collection, liked), { likes: likes })
    })
  }
}

export class Storage {
  static updatePhotoURL(
    uid: string,
    setAvatarURL: any,
    setCoverImageURL?: any
  ) {
    const avatarRef = ref(storage, `users/${uid}/avatar`)
    const coverImageRef = ref(storage, `users/${uid}/cover_image`)
    getDownloadURL(avatarRef)
      .then(url => {
        setAvatarURL(url)
      })
      .catch(e => {
        console.log(e)
        setAvatarURL(null)
      })
    setCoverImageURL &&
      getDownloadURL(coverImageRef)
        .then(url => setCoverImageURL(url))
        .catch(e => console.log(e))
  }
}
