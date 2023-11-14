import styles from './styles.module.scss';
import Box from "@mui/material/Box";
import {Header} from "../Header";

export const QuestionList = () => {
    return <Box bgcolor="primary.main" className={styles.container}>
        <Header/>
    </Box>
}