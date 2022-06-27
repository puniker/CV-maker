import { firestoreDb } from './firebaseInit';
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { UserGeneralDataModel } from '../models/UserGeneralDataModel';
import { UserStudiesDataModel } from '../models/UserStudiesDataModel';
import { UserWorkExperienceDataModel } from '../models/UserWorkExperienceDataModel';
import { AllUserData } from '../interfaces/UserDataInterface';


export const getGeneral = async (userId: string) => {
    const document = await getDoc(doc(firestoreDb, "general", userId));
    return new Promise<UserGeneralDataModel>((resolve, reject) => {   
        if(document.exists()) {
            resolve(new UserGeneralDataModel(document.data()));
        } else {
            console.error('Este usuario de momento no tiene datos.');
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

export const getStudies = async(userId: string) => {

    const q = query(collection(firestoreDb, `/user_cv_data/${userId}/studies`), orderBy("order", 'asc'));
    const querySnapshot = await getDocs(q);

    let output: UserStudiesDataModel [] = [];
    return new Promise<UserStudiesDataModel[]>((resolve, reject) => {
        querySnapshot.forEach((doc) => {
            output.push(new UserStudiesDataModel({...doc.data(), id: doc.id}));
        });
        resolve(output);
    })

}
export const updateStudies = async(userId: string, data: UserStudiesDataModel[]) => {
    return new Promise(async (resolve, reject) => {
        await data.map(async (item: UserStudiesDataModel) => {
            await setDoc(doc(firestoreDb, `/user_cv_data/${userId}/studies/${item.id}`), item);
        })
        resolve('ok');
    })
}
export const removeStudie = async(userId: string, studieId: string) => {
    return new Promise(async (resolve, reject) => {
        await deleteDoc(doc(firestoreDb, `/user_cv_data/${userId}/studies/${studieId}`));
        resolve('ok')
    });
}

export const getWorkExperience = async(userId: string) => {

    const q = query(collection(firestoreDb, `/user_cv_data/${userId}/work_experience`), orderBy("order", 'asc'));
    const querySnapshot = await getDocs(q);
    let output: UserWorkExperienceDataModel [] = [];
    return new Promise<UserWorkExperienceDataModel[]>((resolve, reject) => {
        querySnapshot.forEach((doc) => {
            output.push(new UserWorkExperienceDataModel({...doc.data(), id: doc.id}));
        });
        resolve(output);
    })

}
export const updateWorkExperience = async(userId: string, data: UserWorkExperienceDataModel[]) => {
    return new Promise(async (resolve, reject) => {
        await data.map(async (item: UserWorkExperienceDataModel) => {
            await setDoc(doc(firestoreDb, `/user_cv_data/${userId}/work_experience/${item.id}`), item);
        })
        resolve('ok');
    })
}
export const removeWorkExperience = async(userId: string, studieId: string) => {
    return new Promise(async (resolve, reject) => {
        await deleteDoc(doc(firestoreDb, `/user_cv_data/${userId}/work_experience/${studieId}`));
        resolve('ok')
    });
}

export const getAllData = async(userId: string): Promise<AllUserData> => {
    return new Promise(async (resolve, reject) => {
        resolve({
            general: await getGeneral(userId),
            studies: await getStudies(userId),
            experience: await getWorkExperience(userId),
        })
    })
}
