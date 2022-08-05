import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBhOs-z2x2t0gAJ8sMS7aphSossZbLr1M4",
    authDomain: "mind-4bdad.firebaseapp.com",
    projectId: "mind-4bdad",
    storageBucket: "mind-4bdad.appspot.com",
    messagingSenderId: "521217318633",
    appId: "1:521217318633:web:0110d06ca9daa2d24f9a78",
    measurementId: "G-GPZKQ8F5BP"
  };

//in this one variable we have access to that firebase app above
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;