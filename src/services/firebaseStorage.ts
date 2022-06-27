import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { firebaseInit } from "./firebaseInit";

export const getStorageUrl = (path: string) => {
    const storage = getStorage(firebaseInit);
    const sRef = ref(storage, path)
    return getDownloadURL(sRef)
}