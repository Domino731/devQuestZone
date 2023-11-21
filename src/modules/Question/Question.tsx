import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {getLangColor} from "../../utils/getLangColor.ts";
import {QuestionProps} from "./Question.types.ts";
import {useParams} from "react-router";
import {useEffect} from "react";
import {separeteIds} from "../../utils/router.ts";
import {questionListActions} from "../QuestionsList/store/slice.actions.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {contentSX} from "./Question.styles.ts";
import {questionListSelectors} from "../QuestionsList/store/slice.selectors.ts";
import {Answer} from "./components/Answer";

export const Question = ({id}: QuestionProps) => {
    const params = useParams();
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

    if (questionIsLoading) {
        // TODO all loader
        return <Box borderLeft={`1px solid ${getLangColor('javascript')}`} className={styles.container}>Loading...</Box>
    }
    if (!question) {
        // TODO add 404 view
        return <Box borderLeft={`1px solid ${getLangColor('javascript')}`} className={styles.container}>404</Box>
    }


    return <Box borderLeft={`1px solid ${getLangColor('javascript')}`} className={styles.container}>
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