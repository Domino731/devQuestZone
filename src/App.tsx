import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {HomePage} from "./modules/homePage";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {APP_LINKS} from "./App.const.ts";
import {SectionsList} from "./modules/SectionsList";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {SECTION_LIST} from "./modules/SectionsList/SectionsList.types.ts";
import {QuestionList} from "./modules/QuestionsList";

const router = createBrowserRouter([
    {
        path: APP_LINKS.homePage,
        element: <HomePage/>,
    },
    {
        path: APP_LINKS.sectionsListJavascript,
        element: <SectionsList sectionKey={SECTION_LIST.JAVASCRIPT}/>,
    },
    {
        path: APP_LINKS.sectionsListReact,
        element: <SectionsList sectionKey={SECTION_LIST.REACT}/>,
    },
    {
        path: APP_LINKS.questionsListJavascript,
        element: <QuestionList sectionKey={SECTION_LIST.JAVASCRIPT}/>,
    },
]);

function App() {
    return (
        <CssBaseline>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </CssBaseline>
    )
}

export default App
