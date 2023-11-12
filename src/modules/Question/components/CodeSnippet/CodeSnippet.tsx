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

// Register the language
hljs.registerLanguage('javascript', javascript);
export const CodeSnippet = () => {


    return (
        <div className={styles.container}>
            <Box sx={{backgroundColor: getLangColor('javaScript')}} className={styles.header}>
                <Typography variant="subtitle2" sx={{color: getLangHeaderTextColor('javaScript')}}>JavaScript</Typography>
                <IconButton sx={{color: getLangHeaderTextColor('javaScript'), fontSize: '18px'}}>
                    <ContentCopy fontSize="inherit"/>
                </IconButton>
            </Box>

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
    );
};
