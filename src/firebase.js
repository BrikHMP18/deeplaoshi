// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsv_UbJUlQjMJIPzLQbMQ3GBKi23de4RA",
  authDomain: "deeplaoshi.firebaseapp.com",
  projectId: "deeplaoshi",
  storageBucket: "deeplaoshi.firebasestorage.app",
  messagingSenderId: "474028704075",
  appId: "1:474028704075:web:6f8d391615abfe24df68ce",
  measurementId: "G-8NS94WW8BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);