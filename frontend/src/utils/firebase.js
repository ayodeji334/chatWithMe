import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAL_JTOEzlilEwLOQwuUF3qv3HuTZDyDdw",
  authDomain: "chatwithme-e94f4.firebaseapp.com",
  databaseURL: "https://chatwithme-e94f4.firebaseio.com",
  projectId: "chatwithme-e94f4",
  storageBucket: "chatwithme-e94f4.appspot.com",
  messagingSenderId: "35179725972",
  appId: "1:35179725972:web:7ac223309e7a7d3df06081",
  measurementId: "G-BZ0GFWBSN6"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;