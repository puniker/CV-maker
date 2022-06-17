import { firestoreDb } from './firebaseInit';
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { UserGeneralDataModel } from '../models/UserGeneralDataModel';


export const getGeneral = async (userId: string) => {
    const document = await getDoc(doc(firestoreDb, "general", userId));
    return new Promise<UserGeneralDataModel>((resolve, reject) => {   
        if(document.exists()) {
            console.log(document.data());
            resolve(new UserGeneralDataModel(document.data()));
        } else {
            reject("Document does not exist");
        }
    })
}

export const updateGeneralData = async (userId: string, userData: UserGeneralDataModel) => {
    return new Promise(async (resolve, reject) => {
        await setDoc(doc(firestoreDb, "general", userId), userData);
        resolve('ok');
    })
}