import { logEvent } from "firebase/analytics";
import { firebaseAnalytics } from "./firebaseInit";

export const firebaseLogEvent = (evtName: string) => {
    logEvent(firebaseAnalytics, evtName);

    logEvent(firebaseAnalytics, 'select_content', {
        content_type: 'image',
        content_id: 'P12453',
        items: [{ name: 'Kittens' }]
    });
}
