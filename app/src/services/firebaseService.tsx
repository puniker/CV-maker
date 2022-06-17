import { firebaseInit } from "./firebaseInit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseInit);

export const createFirebaseUser = (email: string, password: string) => {

    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            debugger;
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });

}

export const loginFirebase = (username: string, password: string) => {
    return signInWithEmailAndPassword(auth, username, password)
}

