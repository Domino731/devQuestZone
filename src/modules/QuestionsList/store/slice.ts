import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {Question, QuestionData, QuestionListState} from "./slice.types.ts";

const initialState: QuestionListState = {
    isLoading: false,
    questions: null,
    question: null,
    questionIsLoading: false
}

export const QUESTION_LIST_REDUCER_NAME = 'questionList';

export const questionListSlice = createSlice({
    name: QUESTION_LIST_REDUCER_NAME,
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        setQuestions: (state, action: PayloadAction<Array<QuestionData>>) => {
            state.questions = action.payload;
        },

        setQuestionIsLoading: (state, action: PayloadAction<boolean>) => {
            state.questionIsLoading = action.payload;
        },

        setQuestion: (state, action: PayloadAction<Question | null>) => {
            state.question = action.payload;
        },

        resetState: (state) => {
            state.questions = initialState.questions;
            state.isLoading = initialState.isLoading;
        }
    },
})

// Action creators are generated for each case reducer function
export const questionListSliceActions = questionListSlice.actions;
export const questionListSliceReducer = questionListSlice.reducer;