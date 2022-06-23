import { firebaseInit } from "./firebaseInit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

const auth = getAuth(firebaseInit);

export const createFirebaseUser = (email: string, password: string): Promise<UserCredential> => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((response: UserCredential) => {
            resolve(response);
        })
        .catch((error: string) => {
            reject('Email o contraseña no válidos.');
        })
    });
}

export const loginFirebase = (username: string, password: string): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, username, password)
            .then((response: UserCredential) => {
                resolve(response);
            })
            .catch((error: string) => {
                reject('Acceso denegado');
            })
    })
}

