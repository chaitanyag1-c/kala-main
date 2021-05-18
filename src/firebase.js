import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBXPVQhc7n8teYL1Fepp1uLKXIX6PoaBzs",
  authDomain: "login-9c4ec.firebaseapp.com",
  projectId: "login-9c4ec",
  storageBucket: "login-9c4ec.appspot.com",
  messagingSenderId: "472011044982",
  appId: "1:472011044982:web:820c57fe375a00957e8757"
  // apiKey: "AIzaSyDRdhcNi9kuHm1aOnztUlfxTXKwDx1EIE4",
  // authDomain: "kaka-6201f.firebaseapp.com",
  // projectId: "kaka-6201f",
  // storageBucket: "kaka-6201f.appspot.com",
  // messagingSenderId: "600745092693",
  // appId: "1:600745092693:web:bf686d03a5a01b7a0856dc"
})

export const auth = app.auth()
export default app
