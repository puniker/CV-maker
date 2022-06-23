import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactObserver from 'react-event-observer';

const firebaseConfig = {
    apiKey: "AIzaSyB9uXZkDhRG5aI1X6FWF3ewUwyIQw1Qsp8",
    authDomain: "cv-maker-bfa6e.firebaseapp.com",
    projectId: "cv-maker-bfa6e",
    storageBucket: "cv-maker-bfa6e.appspot.com",
    messagingSenderId: "247022613032",
    appId: "1:247022613032:web:f2dc01bc8a5597733ffb1d",
    measurementId: "G-1V8ML2Z4E2"
};

export const firebaseInit = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseInit);
export const firestoreDb = getFirestore(firebaseInit);

export const firebaseObserver = ReactObserver();
export const authStateObserver = () => {
    firebaseObserver.publish("authStateChanged", ()=> {})
};
