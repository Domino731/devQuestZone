export const exampleCode = `
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
\\n
function Timer() {
\\n
  const [count, setCount] = useState(0);
\\n
useEffect(() => {
\\n
   setTimeout(() => {
\\n
     setCount((count) => count + 1);
   }, 1000);
  });
\\n
  return <h1>I've rendered {count} times!</h1>;
}
\\n
const root = ReactDOM.createRoot(document.getElementById('root'));
\\n
root.render(<Timer />);
`

