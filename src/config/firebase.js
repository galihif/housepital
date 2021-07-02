import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYFA0cQxRaAJwez3eB-q2idtY0RuYJBTQ",
    authDomain: "housepital-757ec.firebaseapp.com",
    projectId: "housepital-757ec",
    storageBucket: "housepital-757ec.appspot.com",
    messagingSenderId: "125322575344",
    appId: "1:125322575344:web:1a532bcf6983cfb218f135",
    measurementId: "G-3TE3G9CQMC"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase