import {Container} from "@mui/material";
import {SectionListProps} from "./SectionsList.types.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {sectionsListSelectors} from "./store/slice.selectors.ts";
import {useEffect} from "react";
import {sectionListActions} from "./store/slice.actions.ts";

export const SectionsList = ({sectionList}: SectionListProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(sectionsListSelectors.isLoading)[sectionList];
    const sectionsList = useAppSelector(sectionsListSelectors.sections)[sectionList];

    useEffect(() => {
        if (!isLoading && !sectionsList) {
            dispatch(sectionListActions.fetchSectionsList(sectionList));
        }
    }, [dispatch, isLoading, sectionList, sectionsList])

    console.log(sectionsList);
    // console.log(isLoading);

    return <Container>
        {sectionList}
    </Container>
}