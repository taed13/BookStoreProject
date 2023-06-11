import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAy0eSGZ7qq49iA1lRsTqG9wijtOZHzJ2Y",
  authDomain: "bookstore-7d188.firebaseapp.com",
  projectId: "bookstore-7d188",
  storageBucket: "bookstore-7d188.appspot.com",
  messagingSenderId: "764121489171",
  appId: "1:764121489171:web:83c3074d0b5dc3975d84e6",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const getStorageClient = getStorage();
export { db, getStorageClient };
export default firebase;
