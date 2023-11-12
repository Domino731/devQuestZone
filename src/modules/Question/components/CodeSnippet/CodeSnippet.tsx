import hljs from 'highlight.js';
import styles from "./styles.module.scss";
import javascript from 'highlight.js/lib/languages/javascript';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Box from "@mui/material/Box";
import {getLangColor, getLangHeaderTextColor} from "../../../../utils/getLangColor.ts";
import Typography from "@mui/material/Typography";
import {ContentCopy} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import {useCallback, useRef} from "react";

// Register the language
hljs.registerLanguage('javascript', javascript);
export const CodeSnippet = () => {
    const ref = useRef<HTMLDivElement>(null);

    const handleCopyCode = useCallback(() => {
        // TODO: display notification after copy
        if (ref.current?.innerText != null) {
            navigator.clipboard.writeText(ref.current?.innerText)
        }
    }, [])

    return (
        <div className={styles.container}>
            <Box sx={{backgroundColor: getLangColor('javaScript')}} className={styles.header}>
                <Typography variant="subtitle2" sx={{color: getLangHeaderTextColor('javaScript')}}>JavaScript</Typography>
                <IconButton
                    sx={{color: getLangHeaderTextColor('javaScript'), fontSize: '18px'}}
                onClick={handleCopyCode}
                >
                    <ContentCopy fontSize="inherit"/>
                </IconButton>
            </Box>

            <div  ref={ref}>
                <SyntaxHighlighter language="javascript" style={dracula}>
       {
           `
export function useWeb3AnalyticsReporter() {
  const { pathname, search } = useLocation(); //depends on project routes manager 
  const { provider } = useWeb3React(); //depends on project web3 providers handling

  //track page-views
  useEffect(() => {
    Web3Analytics.trackPageView(pathname, search);
  }, [pathname, search]);

  //track web3 activity
  useEffect(() => {
    if (provider) {
      Web3Analytics.walletProvider(provider);
    }
  }, [provider]);
}`
       }
</SyntaxHighlighter>
            </div>

        </div>
    );
};
