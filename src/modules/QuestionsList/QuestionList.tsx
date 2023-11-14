import styles from './styles.module.scss';
import Box from "@mui/material/Box";
import {Header} from "../Header";
import Typography from "@mui/material/Typography";

export const QuestionList = () => {
    return <Box bgcolor="primary.main" className={styles.container}>
        <Header/>
        <ul className={styles.list}>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
            <li>
                <Box border="1px solid" borderColor="primary.light" bgcolor="primary.light" borderRadius={4}
                     className={styles.listItemContent}>
                    <Typography variant="h6">Explain flux architecture in terms of react redux library. Do you know
                        other libraries
                        for state management for react?</Typography>
                </Box>
            </li>
        </ul>
    </Box>
}