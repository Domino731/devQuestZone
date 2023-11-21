import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './styles.module.scss';
import {useNavigate} from "react-router";
import {HeaderProps} from "./Header.types.ts";
import {Link} from "react-router-dom";
import {Fragment} from "react";

export const Header = ({items}: HeaderProps) => {
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
                {items.map(({name, link}, index) => {
                    return <Fragment key={`header-links-${index}`}>
                        <Link to={link} key={`header-links-${index}`}>
                            <Typography variant="body1" color="white">{name}</Typography>
                        </Link>
                        {index !== items.length - 1 && <span className={styles.separator}>/</span>}
                    </Fragment>
                })}
            </div>
        </Toolbar>
    </AppBar>
}