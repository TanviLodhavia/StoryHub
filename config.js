import firebase from 'firebase';
require ('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyADjyd5GnBCTrm2vixcxz2PBow4p16_FTI",
    authDomain: "story-hub-d173f.firebaseapp.com",
    databaseURL: "https://story-hub-d173f-default-rtdb.firebaseio.com",
    projectId: "story-hub-d173f",
    storageBucket: "story-hub-d173f.appspot.com",
    messagingSenderId: "252061605103",
    appId: "1:252061605103:web:781b457fd5d241fbcc8f1a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
