import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj-zS2ghvMohxHZynxqjfPoZokCkhE2Os",
  authDomain: "facebook-d8e4c.firebaseapp.com",
  databaseURL: "https://facebook-d8e4c.firebaseio.com",
  projectId: "facebook-d8e4c",
  storageBucket: "facebook-d8e4c.appspot.com",
  messagingSenderId: "490455943407",
  appId: "1:490455943407:web:bad27c395e66856dd1731a",
  measurementId: "G-N8K4QZS7EC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
