import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB33bsAfC5HSGJ1klBQXy3sNkH175wtuJs',
  authDomain: 'react-apps-b33eb.firebaseapp.com',
  projectId: 'react-apps-b33eb',
  storageBucket: 'react-apps-b33eb.appspot.com',
  messagingSenderId: '693494916416',
  appId: '1:693494916416:web:3e8d6a5698d241c4ed86a5',
  measurementId: 'G-4VZ3EM0XQP',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
