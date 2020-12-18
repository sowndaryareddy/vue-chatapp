import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "",
  authDomain: "onlinechat-57471.firebaseapp.com",
  projectId: "onlinechat-57471",
  storageBucket: "onlinechat-57471.appspot.com",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
