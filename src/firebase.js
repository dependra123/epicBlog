// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFFyYlgIwdbgFA9MaFqmV0rLLOYRJBgRk",
  authDomain: "reactblog-e24b2.firebaseapp.com",
  projectId: "reactblog-e24b2",
  storageBucket: "reactblog-e24b2.appspot.com",
  messagingSenderId: "6224481852",
  appId: "1:6224481852:web:09d8bbb3096a6d23b3fd39",
  measurementId: "G-L3HPQBESL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const loginWithGoogle =() => {
    signInWithPopup(auth, provider).then((results) => {

    })
}

const analytics = getAnalytics(app);