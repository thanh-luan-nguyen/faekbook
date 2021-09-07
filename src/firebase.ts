import { initializeApp } from 'firebase/app'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { User } from './interface'

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

const db = getFirestore()

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

export default class Authen {
  static signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const newUser: User = {
          auth: {
            email: email,
            password: password,
          },
        }
        setDoc(doc(db, 'users', email), newUser)
      })
      .catch(err => {
        const errorCode = err.code
        const errorMessage = err.message
        alert(`Error: ${errorCode}. ${errorMessage}`)
      })
  }
  static signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(`User with email ${email} has logged in successfully`)
      })
      .catch(err => {
        const errorCode = err.code
        const errorMessage = err.message
        alert(`Error: ${errorCode}. ${errorMessage}`)
      })
  }
  static getUserData(user: string) {
    onAuthStateChanged(auth, user => {
      if (user) {
        // user is signed in
        // const uid = user.uid
      } else {
        // user is signed out
      }
    })
  }
  static signOut() {
    signOut(auth)
      .then(() => {
        console.log('signed out successfully')
      })
      .catch(e => {
        console.log(e, 'sign-out failed')
      })
  }
  static handleAuthStateChange(callback1: any, callback2: any) {
    onAuthStateChanged(auth, user => {
      if (user) {
        callback1()
      } else {
        callback2()
      }
    })
  }
}
