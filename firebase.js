//import firebase from './firebase/compat/app';

//import firebase from './firebase';

import firebase from 'firebase';

//import { initializeApp } from 'firebase/app';

//import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs5l44DgMGedRS7vrDEzgpf0gQ-fBc3Ls",
    authDomain: "fir-c6ae3.firebaseapp.com",
    projectId: "fir-c6ae3",
    storageBucket: "fir-c6ae3.appspot.com",
    messagingSenderId: "255102334000",
    appId: "1:255102334000:web:13f60926780aa6a519a9f5",
    measurementId: "G-287KBK45H1"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  const db = app.firestore();
  
  export default db;

