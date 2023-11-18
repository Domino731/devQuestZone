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
    answer: QuestionAnswer
}

export type QuestionAnswer = Array<string | QuestionCodeSnippet>;

export type QuestionCodeSnippet = {
    lang: AppLanguagesUnion;
    code: string;
}