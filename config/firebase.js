import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4jDa4UnnsAnxS8dT6Nm4jrxL6EyjWWmk",
  authDomain: "power-full-5c2cd.firebaseapp.com",
  databaseURL: "https://power-full-5c2cd-default-rtdb.firebaseio.com",
  projectId: "power-full-5c2cd",
  storageBucket: "power-full-5c2cd.appspot.com",
  messagingSenderId: "78403342181",
  appId: "1:78403342181:web:1e8c7dacb4e797dc77db8c",
  measurementId: "G-2PC3D79L75"
};

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = getFirestore();


// initialize auth
const auth = getAuth();

export { auth, db, firebase };
