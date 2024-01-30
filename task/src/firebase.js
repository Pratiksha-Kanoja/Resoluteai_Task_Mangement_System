// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf9kZeCOMUGelj7F5PyhmmiUfX1i39aFs",
  authDomain: "taskmanagementsystem-53348.firebaseapp.com",
  databaseURL: "https://taskmanagementsystem-53348-default-rtdb.firebaseio.com",
  projectId: "taskmanagementsystem-53348",
  storageBucket: "taskmanagementsystem-53348.appspot.com",
  messagingSenderId: "955198512212",
  appId: "1:955198512212:web:29233df7a6ee76650aa1c1",
  measurementId: "G-KL7NZ8GEXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth =  getAuth(app);
const database = getFirestore(app);

export {auth,app,database}