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
}