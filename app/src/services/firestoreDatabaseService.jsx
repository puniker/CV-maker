import { firestoreDb } from './firebaseInit';
import { collection, getDocs } from "firebase/firestore";


export const getGeneral = async (userId) => {

    const querySnapshot = await getDocs(collection(firestoreDb, "general"));

    return new Promise((resolve, reject) => {        
        querySnapshot.forEach((doc) => {
            if(doc.id === userId) {
                console.log(doc.id,  doc.data());
                resolve(doc)
            }
        });
    })

}