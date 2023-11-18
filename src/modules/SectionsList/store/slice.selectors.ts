import {RootState} from "../../../store.ts";
import {SECTION_LIST_REDUCER_NAME} from "./slice.ts";
import {createSelector} from "@reduxjs/toolkit";

const root = (appState: RootState) => appState[SECTION_LIST_REDUCER_NAME];

const isLoading = createSelector(root, (state) => state.isLoading);
const sections = createSelector(root, (state) => state.sections);


export const sectionsListSelectors = {
    isLoading, sections
}