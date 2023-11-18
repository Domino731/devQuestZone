import {AppDispatch} from "../../../store.ts";
import {questionListSliceActions} from "./slice.ts";
import {questionListServices} from "./services/api.ts";

const fetchSectionsList = (sectionId: string, questionListId: string) => async (dispatch: AppDispatch) => {
    dispatch(questionListSliceActions.setIsLoading(true));
    try {
        const data = await questionListServices.fetchQuestionList(sectionId, questionListId);
        dispatch(questionListSliceActions.setQuestions(data));
    } catch (e) {
        // TODO handle error (maybe notification?)
        console.log("ERROR!: ", e);
    }
    dispatch(questionListSliceActions.setIsLoading(false));
}

const fetchQuestion = (sectionId: string, questionListId: string, questionId: string) => async (dispatch: AppDispatch) => {
    dispatch(questionListSliceActions.setQuestionIsLoading(true));
    try {
        const data = await questionListServices.fetchQuestion(sectionId, questionListId, questionId);
        dispatch(questionListSliceActions.setQuestion(data));
    } catch (e) {
        // TODO handle error (maybe notification?)
        console.log("ERROR!: ", e);
    }
    dispatch(questionListSliceActions.setQuestionIsLoading(false));
}

export const questionListActions = {
    fetchSectionsList, fetchQuestion
}