import {CircularProgress} from "@mui/material";
import styles from './styles.module.scss';

export const Loader = () => {
    return <div className={styles.container}>
        <CircularProgress color="secondary" size="1em"/>
    </div>
}