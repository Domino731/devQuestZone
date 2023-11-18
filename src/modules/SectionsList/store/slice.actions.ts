import {SectionListUnion} from "../SectionsList.types.ts";
import {AppDispatch} from "../../../store.ts";
import {sectionListSliceActions} from "./slice.ts";
import {sectionsListServices} from "./services/api.ts";


const fetchSectionsList = (sectionKey: SectionListUnion) => async (dispatch: AppDispatch) => {
    dispatch(sectionListSliceActions.setIsLoading({sectionKey, isLoading: true}));
    try {
        const data = await sectionsListServices.fetchSections();
        dispatch(sectionListSliceActions.setSectionsData({sectionKey, data}));
    } catch (e) {
        // TODO handle error (maybe notification?)
        console.log("ERROR!: ", e);
    }
    dispatch(sectionListSliceActions.setIsLoading({sectionKey, isLoading: false}));
};

const fetchSubSectionsList = (sectionKey: SectionListUnion, sectionId: string) => async (dispatch: AppDispatch) => {
    try {
        const data = await sectionsListServices.fetchSubSections(sectionId);
        dispatch(sectionListSliceActions.setSubSectionsData({sectionKey, sectionId, data}))
    } catch (e) {
        // TODO handle error (maybe notification?)
        console.log("ERROR!: ", e);
    }
};

export const sectionListActions = {
    fetchSectionsList, fetchSubSectionsList
}