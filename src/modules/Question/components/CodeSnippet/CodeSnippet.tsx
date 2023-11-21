import hljs from 'highlight.js';
import styles from "./styles.module.scss";
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Box from "@mui/material/Box";
import {lang, getLangHeaderTextColor, getlangText} from "../../../../utils/lang.ts";
import Typography from "@mui/material/Typography";
import {ContentCopy} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import {useCallback, useRef} from "react";
import {CodeSnippetProps} from "./CodeSnippet.types.ts";


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', javascript);

/** Component with header and highlighted code
 * @Param code - code that you want to display
 * @Param lang - programming language
 * */
export const CodeSnippet = ({code, lang}: CodeSnippetProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleCopyCode = useCallback(() => {
        // TODO: display notification after copy
        if (ref.current?.innerText != null) {
            navigator.clipboard.writeText(ref.current?.innerText)
        }
    }, []);

    return (
        <div className={styles.container}>
            <Box sx={{backgroundColor: lang(lang)}} className={styles.header}>
                <Typography variant="subtitle2"
                            sx={{
                                color: getLangHeaderTextColor(lang),
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em'
                            }}>{getlangText(lang)}</Typography>
                <IconButton
                    sx={{color: getLangHeaderTextColor(lang), fontSize: '18px'}}
                    onClick={handleCopyCode}
                >
                    <ContentCopy fontSize="inherit"/>
                </IconButton>
            </Box>
            <div ref={ref}>
                <SyntaxHighlighter language={lang} style={dracula}>
                    {code.replaceAll('\\n', '\n')}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};
