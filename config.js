import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDubqUcWnKie74Mt4pfwvq6FUCBCZmkOcM",
  authDomain: "storyhub-d7fa8.firebaseapp.com",
  projectId: "storyhub-d7fa8",
  storageBucket: "storyhub-d7fa8.appspot.com",
  messagingSenderId: "398100680722",
  appId: "1:398100680722:web:03da39e68d654c856188cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();