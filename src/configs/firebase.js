import firebase from "firebase/app";
// Optionally import the services that you want to use
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcBbofEDlZXFqV5YFydP4Ke1iNJEiTgWs",
  authDomain: "imoney-c1926.firebaseapp.com",
  projectId: "imoney-c1926",
  storageBucket: "imoney-c1926.appspot.com",
  messagingSenderId: "932339766345",
  appId: "1:932339766345:web:88b83bfffb2d3042ee5b98",
  measurementId: "G-KE9DSE2X2W",
};

// Khởi tạo firebase app instance
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
// the instance of Firestore for the default app
const projectFirestore = firebase.firestore();
// the instance of storage for the default app
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
