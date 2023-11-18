import styles from './styles.module.scss';
import Box from "@mui/material/Box";
import {Header} from "../Header";
import Typography from "@mui/material/Typography";
import {QuestionListProps} from "./QuestionList.types.ts";
import {useParams} from "react-router";
import {useEffect} from "react";
import {useAppDispatch} from "../../store.ts";
import {questionListActions} from "./store/slice.actions.ts";
import {separeteIds} from "../../utils/router.ts";

export const QuestionList = ({sectionKey}: QuestionListProps) => {
    const params = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // console.log(params);
        const [sectionId, questionListId] = separeteIds(params.id as string);
        dispatch(questionListActions.fetchSectionsList(sectionId, questionListId))
    }, [dispatch, params.id, params.subSectionId, sectionKey])

    return <Box bgcolor="primary.main" className={styles.container}>
        <Header/>
        <ul className={styles.list}>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
        </ul>
    </Box>
}