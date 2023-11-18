import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {homePageSections} from "./HomePage.const.ts";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

export const HomePage = () => {
    return <Box bgcolor="primary.main" className={styles.container}>
        <Typography variant="h1" align="center">dev_quest_zone</Typography>
        <ul className={styles.list}>
            {homePageSections.map(({title, link}) => <li key={`home-page-list-${title}`}>
                <Box border="1px solid" borderColor="secondary.main" className={styles.listItemWrapper}>
                    <Link to={link}>
                        {title}
                    </Link>
                </Box>
            </li>)}
        </ul>
    </Box>
}