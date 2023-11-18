import {RootState} from "../../../store.ts";
import {createSelector} from "@reduxjs/toolkit";
import {QUESTION_LIST_REDUCER_NAME} from "./slice.ts";

const root = (state: RootState) => state[QUESTION_LIST_REDUCER_NAME];

const isLoading = createSelector(root, (state) => state.isLoading);
const questions = createSelector(root, state => state.questions);
const questionIsLoading = createSelector(root, (state) => state.questionIsLoading);
const question = createSelector(root, state => state.question);
export const questionListSelectors = {
    isLoading,
    questions,
    questionIsLoading,
    question
}