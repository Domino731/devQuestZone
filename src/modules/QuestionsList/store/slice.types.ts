import {AppLanguagesUnion} from "../../../app.types.ts";

export interface QuestionListState {
    isLoading: boolean;
    questions: Array<QuestionData> | null;
    questionIsLoading: boolean;
    question: Question | null;
}

export type QuestionData = {
    name: string;
    detailsDocId: string;
}
export type Question = {
    name: string;
    answerShort: QuestionAnswer;
    answerLong: QuestionAnswer | null;
    id: string;
}

export type QuestionAnswer = Array<string | QuestionCodeSnippet> | string;

export type QuestionCodeSnippet = {
    lang: AppLanguagesUnion;
    code: string;
    className?: string
}