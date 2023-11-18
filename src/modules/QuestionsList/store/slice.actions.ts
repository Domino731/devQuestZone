import {SectionListUnion} from "../../SectionsList/SectionsList.types.ts";
import {AppDispatch} from "../../../store.ts";
import {questionListSliceActions} from "./slice.ts";
import {questionListServices} from "./services/api.ts";

const fetchSectionsList = (sectionId: string, questionListId: string) => async (dispatch: AppDispatch) => {
    dispatch(questionListSliceActions.setIsLoading(true));
    try {
        const data = await questionListServices.fetchQuestionList(sectionId, questionListId);
        console.log(data);
    } catch (e) {
        // TODO handle error (maybe notification?)
        console.log("ERROR!: ", e);
    }
    dispatch(questionListSliceActions.setIsLoading(false));
}

export const questionListActions = {
    fetchSectionsList
}