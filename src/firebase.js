import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBXPVQhc7n8teYL1Fepp1uLKXIX6PoaBzs",
  authDomain: "login-9c4ec.firebaseapp.com",
  projectId: "login-9c4ec",
  storageBucket: "login-9c4ec.appspot.com",
  messagingSenderId: "472011044982",
  appId: "1:472011044982:web:820c57fe375a00957e8757"
})

export const auth = app.auth()
export default app
