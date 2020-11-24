import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm2cEOQCrFll9M0Iz9I3mnhHODM9Ux7r0",
  authDomain: "clone-fc084.firebaseapp.com",
  databaseURL: "https://clone-fc084.firebaseio.com",
  projectId: "clone-fc084",
  storageBucket: "clone-fc084.appspot.com",
  messagingSenderId: "253842303559",
  appId: "1:253842303559:web:2768dd3553a8784d9a1f62",
  measurementId: "G-NCNQGRCGMW",
};

const fireabaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = fireabaseApp.firestore();

export { db, auth };
