
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBGPZ4y3wMAmuqWKMW0u9HYAjXd7UsDceM",
  authDomain: "next-project-ab3a7.firebaseapp.com",
  projectId: "next-project-ab3a7",
  storageBucket: "next-project-ab3a7.appspot.com",
  messagingSenderId: "176002263373",
  appId: "1:176002263373:web:0525c3ec4514bda56aaf04"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() 


const db = app.firestore()
export default db 