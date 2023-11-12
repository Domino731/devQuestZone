"use client";
// components/CodeHighlighter.js

import React from 'react';
import hljs from 'highlight.js';
// Import the language you need (e.g., javascript)
import javascript from 'highlight.js/lib/languages/javascript';

// Register the language
hljs.registerLanguage('javascript', javascript);
export const CodeSnippet = () => {


    return (
        <pre>
            <button onClick={() => {
                hljs.highlightAll()
                console.log(12);
            }}>test</button>
      <code className='javascript'>
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



  12345677890-
  useEffect(() => {
    if (provider) {
      Web3Analytics.walletProvider(provider);
    }
  }, [provider]);
}`
       }
      </code>
    </pre>
    );
};
