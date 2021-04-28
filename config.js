import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBDoTfuyMUQqQwiBi5zyYQYCoGSBIw-Ytk",
    authDomain: "booksanta-47265.firebaseapp.com",
    projectId: "booksanta-47265",
    storageBucket: "booksanta-47265.appspot.com",
    messagingSenderId: "513347024539",
    appId: "1:513347024539:web:0460dac169296cfa1f783e"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
