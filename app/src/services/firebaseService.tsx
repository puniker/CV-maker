import { firebaseInit } from "./firebaseInit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseInit);

export const createFirebaseUser = (email: string, password: string) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject('Email o contraseña no válidos.');
        })
    });
}

export const loginFirebase = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, username, password)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject('Acceso denegado');
            })
    })
}

