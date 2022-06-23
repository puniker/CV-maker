import { firebaseAuth } from "./firebaseInit";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
    signInWithPopup,
    User,
    signOut
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// export const getCurrentUser = () => {
//     const user = firebaseAuth.currentUser
//     if (user) {
//         return user;
//     } else {
//         console.error('not user loggeg')
//     }
// }

export const createFirebaseUser = (email: string, password: string): Promise<UserCredential> => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
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
        signInWithEmailAndPassword(firebaseAuth, username, password)
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
        signInWithPopup(firebaseAuth, provider)
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

export const firebaseAuthSignOut = (): Promise<string> => {
    
    return new Promise((resolve, reject) => {
        signOut(firebaseAuth).then(() => {
            resolve('signed out succesfully')
        }).catch((error) => {
            reject('error on sign out')
        });
    })

}