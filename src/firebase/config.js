import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkSZu5YPOWGRPtKaGT8BXk2HFhSaZ0s4s",
    authDomain: "bookify-5db44.firebaseapp.com",
    projectId: "bookify-5db44",
    storageBucket: "bookify-5db44.appspot.com",
    messagingSenderId: "628513824681",
    appId: "1:628513824681:web:0b421684cd344c408b2eb8"
  };

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services 
const projectFirestore = firebase .firestore()

export { projectFirestore}