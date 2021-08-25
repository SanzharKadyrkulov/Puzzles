
import firebase from "firebase";
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyCm_T9xXFLviMMN1s-4ZmoQ33CQsZA4ycw",
    authDomain: "puzzles-e7a5d.firebaseapp.com",
    projectId: "puzzles-e7a5d",
    storageBucket: "puzzles-e7a5d.appspot.com",
    messagingSenderId: "948246153082",
    appId: "1:948246153082:web:0ab9963cfc3d36897cb8c3",
    measurementId: "G-2EF8F2Z5MP"
  };


  const firebs=firebase.initializeApp(firebaseConfig)

  export default firebs