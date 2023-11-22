import styles from './styles.module.scss';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Error404Props} from "./Error404.types.ts";

export const Error404 = ({errorText = 'Page not found'}: Error404Props) => {
    return <div className={styles.container}>
        <Box className={styles.textWrapper} borderLeft="4px solid" borderColor="#f44336">
            <Typography variant="h1" color="error">404</Typography>
            <Typography variant="h4" color="error">{errorText}</Typography>
        </Box>

    </div>
}