import {SectionListUnion} from "../SectionsList.types.ts";
import {AppDispatch} from "../../../store.ts";
import {sectionListSliceActions} from "./slice.ts";
import {sectionsListServices} from "./services/api.ts";


const fetchSectionsList = (sectionKey: SectionListUnion) => async (dispatch: AppDispatch) => {
    dispatch(sectionListSliceActions.setIsLoading({sectionKey, isLoading: true}));
    try {
        const data = await sectionsListServices.fetchSections();
        dispatch(sectionListSliceActions.setSectionsData({sectionKey, data}));
    } catch (error) {
        // TODO handle error (maybe notification?)
        console.log("ERROR!: ", error);
    }
    dispatch(sectionListSliceActions.setIsLoading({sectionKey, isLoading: false}));
};

export const sectionListActions = {
    fetchSectionsList
}