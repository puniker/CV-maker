import { initializeApp } from "firebase/app";

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
