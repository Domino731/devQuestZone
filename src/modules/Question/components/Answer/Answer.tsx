import {QuestionAnswer} from "../../../QuestionsList/store/slice.types.ts";
import {CodeSnippet} from "../CodeSnippet";
import Box from "@mui/material/Box";
import {answerStyles} from "./Answer.styles.ts";

const code = '<body> \n     <script>\n         // Your JavaScript code here\n         console.log("Hello, World!");\n     </script>\n </body>'


export const Answer = ({answer}: { answer: QuestionAnswer }) => {
    return <Box sx={answerStyles}>
        {answer.map((el, index) => {
            if (typeof el === 'string') {
                return <div dangerouslySetInnerHTML={{__html: el}} key={index}></div>;
            }
            return <CodeSnippet code={el.code} lang={el.lang} key={index} className={el.className}/>
        })}


        {/*<p class="text">Running JavaScript can be done in various environments, depending on your use case. Here are a*/}
        {/*    few common ways to run JavaScript</p>*/}

        {/*<div class="list no-bot-margin">*/}
        {/*    <div class="listItem margin-top-sm">*/}
        {/*        <span class="text-white text-bold">1. Web Browsers: </span><br/>*/}
        {/*        <div class="padding-left-xl">*/}
        {/*            <span class="text-white">1.1 - </span> Open your web browser (such as Chrome, Firefox, or*/}
        {/*            Safari).<br/>*/}
        {/*            <span class="text-white">1.2 - </span>Right-click on the web page and select "Inspect" or*/}
        {/*            press &nbsp;*/}
        {/*            <code>Ctrl+Shift+I</code> (Windows/Linux) or &nbsp;*/}
        {/*            <code>Cmd+Opt+I</code> (Mac)*/}

        {/*            to open the developer tools.<br/>*/}
        {/*            <span class="text-white">1.3 - </span> Go to the "Console" tab.<br/>*/}
        {/*            <span class="text-white">1.4 - </span> You can now type and execute JavaScript code directly in the*/}
        {/*            console.*/}
        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div class="listItem">*/}
        {/*        <span class="text-white text-bold">2. HTML File with <code>&lt;script&gt;</code> Tag: </span><br/>*/}
        {/*        <div class="padding-left-xl">*/}
        {/*            <span class="text-white">2.1 - </span> Create an HTML file with*/}
        {/*            a <code>&lt;script&gt;</code> tag.<br/>*/}
        {/*            <span class="text-white">2.2 - </span> Open the HTML file in a web browser.<br/>*/}
        {/*            <span class="text-white">2.3 - </span> The JavaScript code within*/}
        {/*            the <code>&lt;script&gt;</code> tag will be executed.*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<CodeSnippet code={code} lang="html" class='nested-code-snippet-2'/>*/}

        {/*<div class="list no-top-margin">*/}
        {/*    <div class="listItem margin-top-md ">*/}
        {/*        <span class="text-white text-bold">3. Node.js (Server-Side JavaScript): </span><br/>*/}
        {/*        <div class="padding-left-xl">*/}
        {/*            <span class="text-white">3.1 - </span> Install Node.js on your computer.<br/>*/}
        {/*            <span class="text-white">3.2 - </span> Create a JavaScript file with your code.<br/>*/}
        {/*            <span class="text-white">3.3 - </span> Open a terminal and navigate to the directory containing*/}
        {/*            your*/}
        {/*            JavaScript file.<br/>*/}
        {/*            <span class="text-white">3.4 - </span> Run the script using*/}
        {/*            the <code>node.js</code> command: <code>node*/}
        {/*            app.js</code>*/}
        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div class="listItem">*/}
        {/*        <span class="text-white text-bold">4. Online Code Editors: </span><br/>*/}
        {/*        <div class="padding-left-xl">*/}
        {/*            <span class="text-white">4.1 - </span> Use online platforms like CodePen, JSFiddle, or Repl.it to*/}
        {/*            write and run JavaScript code in your*/}
        {/*            browser.*/}
        {/*        </div>*/}

        {/*    </div>*/}

        {/*    <div class="listItem">*/}
        {/*        <span class="text-white text-bold">5. Integrated Development Environments (IDEs): </span><br/>*/}
        {/*        <div class="padding-left-xl">*/}
        {/*            <span class="text-white">5.1 - </span> Use an IDE like Visual Studio Code, Atom, or Sublime Text to*/}
        {/*            write and run JavaScript code. You may*/}
        {/*            need*/}
        {/*            to*/}
        {/*            set up a simple server or use an extension like "Live Server" in VS Code to run HTML files with*/}
        {/*            JavaScript.*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<p class="text-summary">*/}
        {/*    Choose the method that best fits your needs based on whether you're working on the web, server-side, or in a*/}
        {/*    specific development environment.*/}
        {/*</p>*/}
    </Box>
}