import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqIyByVteDB66xJ-njUWTxcIuFK1MUSJA",
    authDomain: "weather-app-487b0.firebaseapp.com",
    databaseURL: "https://weather-app-487b0.firebaseio.com",
    projectId: "weather-app-487b0",
    storageBucket: "weather-app-487b0.appspot.com",
    messagingSenderId: "847563506241",
    appId: "1:847563506241:web:39d5dde7b8ff2bf6b43cc0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;