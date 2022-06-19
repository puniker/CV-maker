import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { TemplateDataModel } from "../models/TemplateDataModel";
import { firestoreDb } from "./firebaseInit";


export const getAllTemplates = async() => {

    const q = query(collection(firestoreDb, `/templates`));
    const querySnapshot = await getDocs(q);
    let output: TemplateDataModel [] = [];
    return new Promise<TemplateDataModel[]>((resolve, reject) => {
        querySnapshot.forEach((doc) => {
            output.push(new TemplateDataModel({...doc.data(), id: doc.id}));
        });
        resolve(output);
    })

}