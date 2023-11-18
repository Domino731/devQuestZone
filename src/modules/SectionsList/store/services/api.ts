import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../../../../firebase/config.ts";
import {SectionListItemData, SectionListSubSectionData} from "../slice.types.ts";

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

const fetchSubSections = async (sectionId: string) => {
    const payload: Array<SectionListSubSectionData> = [];
    const querySnapshot = await getDocs(collection(firestore, `javascript/${sectionId}/sections`));
    await querySnapshot.forEach((doc) => {
        payload.push({
            docId: doc.id,
            name: doc.data().name
        })
    });
    return payload;
}

export const sectionsListServices = {
    fetchSections, fetchSubSections
}