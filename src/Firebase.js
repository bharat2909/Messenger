import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBf6lYgbrC5UlqJOgaBb2HmtlPOEk1Q7TM",
  authDomain: "messenger-clone-c801e.firebaseapp.com",
  projectId: "messenger-clone-c801e",
  storageBucket: "messenger-clone-c801e.appspot.com",
  messagingSenderId: "735286346154",
  appId: "1:735286346154:web:f73595e4308146e4912bd3",
  measurementId: "G-C9WJ564V1R",
});
const db = firebaseApp.firestore();

export default db;
