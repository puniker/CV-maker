import { collection, DocumentData, getDocs, orderBy, query } from "firebase/firestore";
import { TemplateDataModel } from "../models/TemplateDataModel";
import { firestoreDb } from "./firebaseInit";
import { getStorageUrl } from "./firebaseStorage";


export const getAllTemplates = async() => {

    const q = query(collection(firestoreDb, `/templates`));
    const querySnapshot = await getDocs(q);
    let tmp: TemplateDataModel [] = [];
    let output: TemplateDataModel [] = [];
    querySnapshot.forEach(async (doc) => {
        tmp.push(new TemplateDataModel({...doc.data(), id: doc.id}));
    });
    return new Promise<TemplateDataModel[]>((resolve, reject) => {
        tmp.forEach(async (value: TemplateDataModel, index, array) => {
            const img_url: string = await getStorageUrl('/templates/' + value.preview_image);
            output.push(new TemplateDataModel({...value, preview_image: img_url}));
            if (index === tmp.length -1) resolve(output);
        });
    })

}