// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0BNAcpjeN_TZxu1_Xv-NJ2R2yoqgo_uE",
  authDomain: "assignment-9-project-9c664.firebaseapp.com",
  projectId: "assignment-9-project-9c664",
  storageBucket: "assignment-9-project-9c664.appspot.com",
  messagingSenderId: "322554011565",
  appId: "1:322554011565:web:7e172da48ec642d2d70b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;