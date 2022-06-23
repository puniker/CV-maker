import { firebaseInit } from "./firebaseInit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

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
            .catch((error) => {
                reject(error.code + error.message);
            })
    })
}

export const authWithGoogle = (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result: UserCredential) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                resolve(result)
            }).catch((error) => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject(errorCode + errorMessage);
            });
    })
}

