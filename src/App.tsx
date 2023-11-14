import {Question} from "./modules/Question";
import {QuestionList} from "./modules/QuestionsList";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'

function App() {
    return (
        <CssBaseline>
            <div style={{display: 'flex'}}>
                <QuestionList/>
                <Question/>
            </div>
        </CssBaseline>
    )
}

export default App
