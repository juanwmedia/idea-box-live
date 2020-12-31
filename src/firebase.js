import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD03SCXkk8R3eajStLvKrDagpDez5KLwbk",
  authDomain: "ideaboxlive.firebaseapp.com",
  projectId: "ideaboxlive",
  storageBucket: "ideaboxlive.appspot.com",
  messagingSenderId: "319287508716",
  appId: "1:319287508716:web:d3235408fb09055c7f6fc9"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
