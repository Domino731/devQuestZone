import styles from './styles.module.scss';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Error404 = () => {
    return <div className={styles.container}>
        <Box className={styles.textWrapper} borderLeft="4px solid" borderColor="#f44336">
            <Typography variant="h1" color="error">404</Typography>
            <Typography variant="h4" color="error">Page not found</Typography>
        </Box>

    </div>
}