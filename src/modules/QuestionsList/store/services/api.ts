import {SectionListItemData} from "../../../SectionsList/store/slice.types.ts";
import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../../../../firebase/config.ts";

const fetchQuestionList = async (sectionId: string, questionListId: string) => {
    const payload: Array<SectionListItemData> = [];
    const querySnapshot = await getDocs(collection(firestore, `javascript/${sectionId}/sections/${questionListId}/questions-list`));
    await querySnapshot.forEach((doc) => {
        console.log(doc.data());
        payload.push({
            docId: doc.id,
            subSections: null,
            name: doc.data().name
        })
    });
    return payload;
}

export const questionListServices = {
    fetchQuestionList
}