import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../../../../firebase/config.ts";
import {SectionListItemData} from "../slice.types.ts";

const fetchSections = async () => {
    const payload: Array<SectionListItemData> = [];
    const querySnapshot = await getDocs(collection(firestore, "javascript"));
    await querySnapshot.forEach((doc) => {
        payload.push({
            docId: doc.id,
            subSections: null,
            name: doc.data().name
        })
    });
    return payload;
}

export const sectionsListServices = {
    fetchSections
}