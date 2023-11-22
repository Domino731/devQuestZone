import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {getLangBgColor} from "../../utils/lang.ts";
import {QuestionProps} from "./Question.types.ts";
import {useLocation, useNavigate, useParams} from "react-router";
import {useCallback, useEffect} from "react";
import {separeteIds} from "../../utils/router.ts";
import {questionListActions} from "../QuestionsList/store/slice.actions.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {contentSX} from "./Question.styles.ts";
import {questionListSelectors} from "../QuestionsList/store/slice.selectors.ts";
import {Answer} from "./components/Answer";
import {Loader} from "../../components/Loader";
import {Error404} from "../../components/Error404";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import {questionListSliceActions} from "../QuestionsList/store/slice.ts";

export const Question = ({id}: QuestionProps) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const questionIsLoading = useAppSelector(questionListSelectors.questionIsLoading);
    const question = useAppSelector(questionListSelectors.question);

    useEffect(() => {
        // TODO move upper to prevent multiple api calls
        if ((!question && !questionIsLoading) || question?.id !== id) {
            console.log('fetch');
            const [sectionId, questionListId] = separeteIds(params.id as string);
            dispatch(questionListActions.fetchQuestion(sectionId, questionListId, id));
        }
    }, [dispatch, id, params.id, question, questionIsLoading])


    const handleClose = useCallback(() => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.delete('questionId');
        const newUrl = `${location.pathname}?${searchParams.toString()}`;
        navigate(newUrl);
        dispatch(questionListSliceActions.clearQuestion());
    }, [dispatch, location.pathname, location.search, navigate]);


    if (questionIsLoading) {
        // TODO all loader
        return <Box borderLeft={`1px solid ${getLangBgColor('javascript')}`}
                    className={styles.container}>
            <Loader/>
        </Box>
    }
    if (!question) {
        // TODO add 404 view
        return <Box borderLeft={`1px solid ${getLangBgColor('javascript')}`}
                    className={styles.container}><Error404/></Box>
    }


    return <Box borderLeft={`1px solid ${getLangBgColor('javascript')}`} className={styles.container}>
        <div className={styles.topBar}>
            <IconButton onClick={handleClose} size="large">
                <CloseIcon/>
            </IconButton>
        </div>
        <header>
            <Typography variant="h4" gutterBottom>
                {question.name}
            </Typography>
        </header>
        <Divider/>
        <Box sx={contentSX}>
            <Typography variant="h5" gutterBottom color="secondary">Short</Typography>
            <Answer answer={question.answerShort}/>
            {question.answerLong && <>
                <Typography variant="h5" gutterBottom color="secondary">Long</Typography>
                <Answer answer={question.answerLong}/>
            </>}

        </Box>
    </Box>
}