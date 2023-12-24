import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKWz0ayC3KpG3ghQkpe5JCwzMeNiaJqm8",
  authDomain: "dinseyplusclone.firebaseapp.com",
  projectId: "dinseyplusclone",
  storageBucket: "dinseyplusclone.appspot.com",
  messagingSenderId: "86668729944",
  appId: "1:86668729944:web:0578fec1a0581d49ff342d",
  measurementId: "G-VE6MBPMKTL"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
