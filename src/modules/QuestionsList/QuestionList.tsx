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
import {Header} from "../Header";

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
        <div className={currentQuestionId ? styles.listWrapper : styles.listWrapperFullWidth}>
            <Header/>
            <ul className={styles.list}>
                {[...questions, ...questions].map(({name, detailsDocId}) => {
                    return <ListItem sx={{
                        padding: 0,
                        "a": {
                            width: '100%',
                            color: 'text.primary',
                            paddingTop: '12px',
                            paddingBottom: '12px',
                            paddingLeft: '16px',
                            paddingRight: '16px',
                            borderBottom: '2px solid',
                            borderBottomColor: 'primary.light',
                            "&:hover": {
                                borderBottomColor: 'secondary.dark'
                            }
                        }
                    }} key={detailsDocId}>
                        <Link to={createQuestionLink(detailsDocId)}>
                            <Typography fontSize={16}>{name}</Typography>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </div>
        {currentQuestionId && <Question id={currentQuestionId}/>}

    </Box>
}