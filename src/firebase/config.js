// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWL4RRhlbEkQXAlk_f0RsVdsE-RbUGBp4",
  authDomain: "marcinoles87-photoapp.firebaseapp.com",
  projectId: "marcinoles87-photoapp",
  storageBucket: "marcinoles87-photoapp.appspot.com",
  messagingSenderId: "790173186276",
  appId: "1:790173186276:web:5cd31552394dcc293954f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

const projectStorage = getStorage();
const projectFirestore = getFirestore(app);



export { projectStorage , projectFirestore , app}

