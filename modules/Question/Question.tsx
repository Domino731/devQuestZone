import styles from "./styles.module.scss"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CodeSnippet from "@/modules/Question/CodeSnippet";


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
    }
}

export const Question = () => {
    return <div className={styles.container}>
        <header>
            <Typography variant="h4" gutterBottom>
                Explain flux architecture in terms of react redux library. Do you know other libraries for state
                management for react?
            </Typography>
        </header>
        <Divider/>
        <Box sx={contentSX}>
            <div className="element">
                The value of {`this`} in a function {`that's`} defined within another function, known as a nested
                function,
                is determined based on the rules for the value of {`this`} within the context in which the nested
                function
                is called.
            </div>

            <ul className="list">
                <li>
                    <p>
                        1. <span className="list-item-title">Global Scope</span>: If the nested function is called in
                        the global scope (outside of any other
                        function or
                        object), the value of {`this`} within the nested function will typically refer to the global
                        object.
                        In a
                        web browser, the global object is usually the `window` object.
                    </p>

                    <div>
                        <CodeSnippet/>
                    </div>

                </li>
            </ul>
        </Box>
    </div>
}