
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBy3b9Q5n3Nt4O8I6OoSIPoP0DXXHztdJ0",
    authDomain: "lab-notes-a49df.firebaseapp.com",
    databaseURL: "https://lab-notes-a49df-default-rtdb.firebaseio.com",
    projectId: "lab-notes-a49df",
    storageBucket: "lab-notes-a49df.appspot.com",
    messagingSenderId: "280245765299",
    appId: "1:280245765299:web:d75348f4b4d28650299cc6",
    measurementId: "G-9JCM6W4VXQ"
  };

   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { auth, db}

