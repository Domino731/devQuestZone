export interface QuestionListState {
    isLoading: boolean;
    questions: Array<QuestionData> | null;
}

export type QuestionData = {
    name: string;
    detailsDocId: string;
}