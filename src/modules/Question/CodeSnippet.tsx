import hljs from 'highlight.js';

import javascript from 'highlight.js/lib/languages/javascript';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Register the language
hljs.registerLanguage('javascript', javascript);
export const CodeSnippet = () => {


    return (
<SyntaxHighlighter language="javascript" style={docco}>
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
    );
};
