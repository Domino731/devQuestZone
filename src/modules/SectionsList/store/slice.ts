import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SECTION_LIST, SectionListUnion} from "../SectionsList.types.ts";
import {SectionListItemData, SectionListSubSectionData} from "./slice.types.ts";

export interface SectionsListState {
    isLoading: Record<SectionListUnion, boolean>;
    sections: Record<SectionListUnion, Array<SectionListItemData> | null>;
}

const initialState: SectionsListState = {
    isLoading: {
        [SECTION_LIST.JAVASCRIPT]: false,
        [SECTION_LIST.REACT]: false
    },
    sections: {
        [SECTION_LIST.JAVASCRIPT]: null,
        [SECTION_LIST.REACT]: null
    }
}

export const SECTION_LIST_REDUCER_NAME = 'sectionsList'

const counterSlice = createSlice({
    name: SECTION_LIST_REDUCER_NAME,
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ sectionKey: SectionListUnion, isLoading: boolean }>) => {
            state.isLoading[action.payload.sectionKey] = action.payload.isLoading
        },
        setSectionsData: (state, action: PayloadAction<{
            sectionKey: SectionListUnion,
            data: Array<SectionListItemData>
        }>) => {
            state.sections[action.payload.sectionKey] = action.payload.data
        },
        setSubSectionsData: (state, action: PayloadAction<{
            sectionKey: SectionListUnion,
            sectionId: string,
            data: Array<SectionListSubSectionData>
        }>) => {
            const {sectionId, sectionKey, data} = action.payload;
            const sections = state.sections[sectionKey];
            if (!sections) return;
            const sectionIndex = sections.findIndex(({docId}) => docId === sectionId);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.sections[sectionKey][sectionIndex].subSections = data;
        }
    },
})

export const sectionListSliceActions = counterSlice.actions
export const sectionsListReducer = counterSlice.reducer;