import {QuestionAnswer} from "../../../QuestionsList/store/slice.types.ts";
import {CodeSnippet} from "../CodeSnippet";
import Box from "@mui/material/Box";
import {answerStyles} from "./Answer.styles.ts";

export const Answer = ({answer}: { answer: QuestionAnswer }) => {
    if (typeof answer === 'string') {
        return <Box sx={{fontSize: '16px'}}>
            <div dangerouslySetInnerHTML={{__html: answer}}/>
        </Box>
    }

    return <Box sx={answerStyles}>
        {answer.map((el, index) => {
            if (typeof el === 'string') {
                return <div dangerouslySetInnerHTML={{__html: el}} key={index}></div>;
            }
            return <CodeSnippet code={el.code} lang={el.lang} key={index} className={el.className}/>
        })}
    </Box>
}