import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './styles.module.scss';
import {Menu} from "./components/Menu/Menu.tsx";
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate();

    return <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="goBack"
                title="go back"
                onClick={() => navigate(-1)}
            >
                <ArrowBackIcon/>
            </IconButton>
            <div className={styles.links}>
                <a className={styles.link}>
                    <Typography variant="body1" color="white">JavaScript</Typography>
                </a>
                <span className={styles.separator}>/</span>
                {/*<div className={styles.menu}>*/}
                <Menu/>
                {/*</div>*/}

                {/*<a className={styles.link}>*/}
                {/*    <Typography variant="body1" color="white">What is class?</Typography>*/}
                {/*</a>*/}
            </div>
        </Toolbar>
    </AppBar>
}