import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import {HomePage} from "./modules/homePage";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {APP_LINKS} from "./App.const.ts";
import {SectionsList} from "./modules/SectionsList";
import {Provider} from "react-redux";
import {store} from "./store.ts";

const router = createBrowserRouter([
    {
        path: APP_LINKS.homePage,
        element: <HomePage/>,
    },
    {
        path: APP_LINKS.sectionsListJavascript,
        element: <SectionsList sectionKey="JAVASCRIPT"/>,
    },
    {
        path: APP_LINKS.sectionsListReact,
        element: <SectionsList sectionKey="REACT"/>,
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
