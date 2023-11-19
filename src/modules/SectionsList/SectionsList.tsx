import {Container, List, ListItem} from "@mui/material";
import {SectionListProps} from "./SectionsList.types.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {sectionsListSelectors} from "./store/slice.selectors.ts";
import {useCallback, useEffect} from "react";
import {sectionListActions} from "./store/slice.actions.ts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.scss';
import {SectionListSubSectionData} from "./store/slice.types.ts";
import {Link} from "react-router-dom";
import {APP_LINKS} from "../../App.const.ts";
import {Header} from "../Header";
import Box from "@mui/material/Box";

export const SectionsList = ({sectionKey}: SectionListProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(sectionsListSelectors.isLoading)[sectionKey];
    const sectionsList = useAppSelector(sectionsListSelectors.sections)[sectionKey];

    useEffect(() => {
        if (!isLoading && !sectionsList) {
            dispatch(sectionListActions.fetchSectionsList(sectionKey));
        }
    }, [dispatch, isLoading, sectionKey, sectionsList])

    const getSubSections = useCallback((sectionId: string): Array<SectionListSubSectionData> | null => {
        if (!sectionsList) return null;
        return sectionsList.find(({docId}) => docId === sectionId)?.subSections ?? null;
    }, [sectionsList])

    const handleFetchSubSections = useCallback((sectionId: string) => {
        const subSections = getSubSections(sectionId);
        if (!subSections) {
            dispatch(sectionListActions.fetchSubSectionsList(sectionKey, sectionId))
        }
    }, [dispatch, getSubSections, sectionKey])

    const SubSections = useCallback((sectionId: string) => {
        const data = getSubSections(sectionId);
        if (!data) {
            // TODO loader
            return 'loading...'
        }
        return <List>
            {data.map(({name, docId}) => <ListItem sx={{
                'a': {
                    color: 'white'
                }
            }} key={docId}>
                <Link to={APP_LINKS.buildQuestionListJavaScript(sectionId, docId)}>
                    <Typography>{name}</Typography>
                </Link>
            </ListItem>)}
        </List>
    }, [getSubSections])

    if (!sectionsList) {
        // TODO loader
        return 'loading...'
    }

    return <Box className={styles.container} bgcolor="primary.main">
        <Header/>
        <main className={styles.listWrapper}>
            <Container>
                <ul className={styles.list}>
                    {sectionsList.map(({name, docId}) => <li className={styles.listItem} key={docId}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                onClick={() => handleFetchSubSections(docId)}
                            >
                                <Typography>{name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {SubSections(docId)}
                            </AccordionDetails>
                        </Accordion>
                    </li>)}
                </ul>
            </Container>
        </main>
    </Box>
}