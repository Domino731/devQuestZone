import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {homePageSections} from "./HomePage.const.ts";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";
import {Container, List, ListItem} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {sx} from "./HomePage.styles.ts";

export const HomePage = () => {
    return <Box bgcolor="primary.main" sx={sx.container}>
        <header>
            <Typography variant="h1" align="center" sx={sx.title}>DEV_QUEST_ZONE</Typography>
            <Typography variant="h4" align="center" sx={sx.description}>Enhance your skills, face challenges,
                and develop yourself as a
                programmer at every level of expertise!</Typography>
        </header>

        <Container>
            <ul className={styles.list}>
                {homePageSections.map(({title, link}) => <li key={`home-page-list-${title}`}>
                    <Box className={styles.listItemWrapper} sx={sx.listItem}>
                        <Link to={link}>
                            {title}
                        </Link>
                        <ExpandMoreIcon style={{transform: 'rotate(-90deg)', marginRight: '16px'}}/>
                    </Box>
                </li>)}
            </ul>
        </Container>

    </Box>
}