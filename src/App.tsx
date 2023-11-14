import {Question} from "./modules/Question";
import {QuestionList} from "./modules/QuestionsList";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {firestore} from "./firebase/config.ts";
import {doc, getDoc} from "firebase/firestore";
import {useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";

function App() {
    useEffect(() => {
        const test = async () => {
            const querySnapshot = await getDocs(collection(firestore, "javascript"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        }
        test();
    }, [])
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
