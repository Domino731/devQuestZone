import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../../../../firebase/config.ts";
import {Question, QuestionData} from "../slice.types.ts";
import {doc, getDoc} from "firebase/firestore";

const fetchQuestionList = async (sectionId: string, questionListId: string) => {
    const payload: Array<QuestionData> = [];
    const querySnapshot = await getDocs(collection(firestore, `javascript/${sectionId}/sections/${questionListId}/questions-list`));
    await querySnapshot.forEach((doc) => {
        payload.push({
            name: doc.data().name,
            detailsDocId: doc.data().detailsDocId
        })
    });
    payload.sort((a, b) => Number(a.detailsDocId) - Number(b.detailsDocId))
    console.log(payload);
    return payload;
}

const fetchQuestion = async (sectionId: string, questionListId: string, questionId: string) => {
    const docRef = doc(firestore, `javascript/${sectionId}/sections/${questionListId}/questions`, questionId);
    const docSnap = await getDoc(docRef);

    let payload: Question | null = null;

    if (docSnap.exists()) {
        const {name, answerShort, answerLong} = docSnap.data();

        payload = {
            name,
            answerShort,
            answerLong: answerLong ?? null,
            id: docSnap.id
        }
    } else {
        console.log("No such document!");
    }

    return payload;
}

export const questionListServices = {
    fetchQuestionList, fetchQuestion
}