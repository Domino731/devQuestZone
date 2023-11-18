import styles from './styles.module.scss';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {QuestionListProps} from "./QuestionList.types.ts";
import {useLocation, useParams} from "react-router";
import {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {questionListActions} from "./store/slice.actions.ts";
import {separeteIds} from "../../utils/router.ts";
import {questionListSelectors} from "./store/slice.selectors.ts";
import {List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {Question} from "../Question";

export const QuestionList = ({sectionKey}: QuestionListProps) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const isLoading = useAppSelector(questionListSelectors.isLoading);
    const questions = useAppSelector(questionListSelectors.questions);

    const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);

    useEffect(() => {
        // console.log(params);
        if (!isLoading && !questions) {
            const [sectionId, questionListId] = separeteIds(params.id as string);
            dispatch(questionListActions.fetchSectionsList(sectionId, questionListId))
        }
    }, [dispatch, isLoading, params.id, params.subSectionId, questions, sectionKey])

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setCurrentQuestionId(queryParams.get("questionId"));
    }, [location.search])

    const createQuestionLink = useCallback((detailsDocId: string) => {
        const {pathname} = location;
        return `${pathname}?questionId=${detailsDocId}`;
    }, [location])

    if (!questions) {
        // TODO add loader
        return 'loading...'
    }
    return <Box bgcolor="primary.main" className={styles.container}>
        {/*<Header/>*/}
        <List className={styles.list}>
            {questions.map(({name, detailsDocId}) => {
                return <ListItem sx={{"a": {color: 'white'}}} key={detailsDocId}>
                    <Link to={createQuestionLink(detailsDocId)}>
                        <Typography>{name}</Typography>
                    </Link>
                </ListItem>
            })}
        </List>
        {currentQuestionId && <Question id={currentQuestionId}/>}

    </Box>
}