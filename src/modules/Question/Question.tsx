import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {CodeSnippet} from "./components/CodeSnippet/CodeSnippet.tsx";
import {exampleCode} from "./Question.const.ts";
import {getLangColor} from "../../utils/getLangColor.ts";


const contentSX = {
    fontSize: "100px",
    marginTop: "24px",
    color: 'text.secondary',
    ".element": {
        fontSize: "0.16em"
    },
    ".list": {
        fontSize: "0.16em"
    },
    ".text": {
        fontSize: "0.16em"
    },
    ".list-item-title": {
        color: "white",
        fontWeight: 'bold'
    },
    ".text-block": {
        display: "block",
        marginTop: "16px",
        marginBottom: "16px",
        fontSize: "16px"
    },

    ".code": {
        background: '#2F3A46',
        color: "white",
        fontSize: "1em",
        padding: "0.1em 0.4em",
        borderRadius: "0.4em",
        border: "1px solid  #3B4A59"
    },
    ".code-link": {
        background: '#2F3A46',
        color: "white",
        fontSize: "1em",
        padding: "0 0.4em",
        borderRadius: "0.4em",
        border: "1px solid  #3B4A59",

        a: {
            color: "inherit",
            textDecoration: 'underline',
            transition: "0.2s",
            "&:hover": {
                opacity: 0.6
            }
        }
    }
}

export const Question = () => {
    console.log(123);
    return <Box borderLeft={`1px solid ${getLangColor('javascript')}`} className={styles.container}>
        <header>
            <Typography variant="h4" gutterBottom>
                Explain flux architecture in terms of react redux library. Do you know other libraries for state
                management for react?
            </Typography>
        </header>
        <Divider/>
        <Box sx={contentSX}>
            <p className="text-block">
                The value of {`this`} in a function {`that's`} defined within another function, known as a nested
                function,
                is determined based on the rules for the value of {`this`} within the context in which the nested
                function
                is called.
            </p>

            <ul className="list">
                <li>
                    <p className="text-block">
                        1. <span className="list-item-title">Global Scope</span>: If the nested function is called in
                        the global scope (outside of any other
                        function or
                        object), the value of {`this`} within the nested function will typically refer to the global
                        object.
                        In a
                        web browser, the global object is usually the `window` object.
                    </p>

                    <div>
                        <CodeSnippet lang="javascript" code={exampleCode}/>
                    </div>

                </li>
            </ul>

            <p className="text-block">
                Lorem ipsum dolor sit amet, <code className="code">document.querySelector()</code> consectetur
                adipisicing elit. Dicta, numquam?
                <code className="code-link"><a href="/test123">document.querySelector()</a></code>
            </p>
        </Box>
    </Box>
}