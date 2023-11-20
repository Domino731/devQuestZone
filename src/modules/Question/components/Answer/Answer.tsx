import {QuestionAnswer} from "../../../QuestionsList/store/slice.types.ts";
import {CodeSnippet} from "../CodeSnippet";
import Box from "@mui/material/Box";
import {answerStyles} from "./Answer.styles.ts";

export const Answer = ({answer}: { answer: QuestionAnswer }) => {
    return <Box sx={answerStyles}>
        {answer.map((el, index) => {
            if (typeof el === 'string') {
                return <div dangerouslySetInnerHTML={{__html: el}} key={index}></div>;
            }
            return <CodeSnippet code={el.code} lang={el.lang} key={index}/>
        })}

        {/*<p class="text">*/}
        {/*    JavaScript was created by <a href='https://pl.wikipedia.org/wiki/Brendan_Eich' target="_blank">Brendan*/}
        {/*    Eich</a> while he was working at <a href='https://en.wikipedia.org/wiki/Netscape' target='_blank'>Netscape*/}
        {/*    Communications Corporation</a>.*/}
        {/*    He*/}
        {/*    developed the language in just 10 days in May 1995. Initially, it was called "Mocha" and later "LiveScript"*/}
        {/*    before finally being named JavaScript, likely to ride the popularity of Java, another programming language*/}
        {/*    that was gaining traction at the time. JavaScript was first introduced in the <a*/}
        {/*    href='https://en.wikipedia.org/wiki/Netscape_Navigator' target="_blank">Netscape Navigator web browser </a>in*/}
        {/*    December 1995.*/}
        {/*</p>*/}
    </Box>
}