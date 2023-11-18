import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {CodeSnippet} from "./components/CodeSnippet/CodeSnippet.tsx";
import {exampleCode} from "./Question.const.ts";
import {getLangColor} from "../../utils/getLangColor.ts";
import {QuestionProps} from "./Question.types.ts";
import {useParams} from "react-router";
import {useEffect} from "react";
import {separeteIds} from "../../utils/router.ts";
import {questionListActions} from "../QuestionsList/store/slice.actions.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {contentSX} from "./Question.styles.ts";
import {questionListSelectors} from "../QuestionsList/store/slice.selectors.ts";

export const Question = ({id}: QuestionProps) => {
    const params = useParams();
    const dispatch = useAppDispatch();

    const questionIsLoading = useAppSelector(questionListSelectors.questionIsLoading);
    const question = useAppSelector(questionListSelectors.question);

    useEffect(() => {
        if (!question && !questionIsLoading) {
            const [sectionId, questionListId] = separeteIds(params.id as string);
            dispatch(questionListActions.fetchQuestion(sectionId, questionListId, id));
        }
    }, [dispatch, id, params.id, question, questionIsLoading])

    if (questionIsLoading) {
        // TODO all loader
        return 'loading...'
    }
    if (!question) {
        // TODO add 404 view
        return '404 error'
    }


    return <Box borderLeft={`1px solid ${getLangColor('javascript')}`} className={styles.container}>
        <header>
            <Typography variant="h4" gutterBottom>
                {question.name}
            </Typography>
        </header>
        <Divider/>
        <Box sx={contentSX}>
            <div className="text-block">
                The value of {`this`} in a function {`that's`} defined within another function, known as a nested
                function,
                is determined based on the rules for the value of {`this`} within the context in which the nested
                function
                is called.
            </div>

            <div className="list">
                <div>
                    <div className="text-block">
                        1. <span className="list-item-title">Global Scope</span>: If the nested function is called in
                        the global scope (outside of any other
                        function or
                        object), the value of {`this`} within the nested function will typically refer to the global
                        object.
                        In a
                        web browser, the global object is usually the `window` object.
                    </div>

                    <div>
                        <CodeSnippet lang="javascript" code={exampleCode}/>
                    </div>

                </div>
            </div>

            <div className="text-block">
                Lorem ipsum dolor sit amet, <code className="code">document.querySelector()</code> consectetur
                adipisicing elit. Dicta, numquam?
                <code className="code-link"><a href="/test123">document.querySelector()</a></code>
            </div>
        </Box>
    </Box>
}