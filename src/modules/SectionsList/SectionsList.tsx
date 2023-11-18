import {Container} from "@mui/material";
import {SectionListProps} from "./SectionsList.types.ts";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {sectionsListSelectors} from "./store/slice.selectors.ts";
import {useEffect} from "react";
import {sectionListActions} from "./store/slice.actions.ts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.scss';

export const SectionsList = ({sectionList}: SectionListProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(sectionsListSelectors.isLoading)[sectionList];
    const sectionsList = useAppSelector(sectionsListSelectors.sections)[sectionList];

    useEffect(() => {
        if (!isLoading && !sectionsList) {
            dispatch(sectionListActions.fetchSectionsList(sectionList));
        }
    }, [dispatch, isLoading, sectionList, sectionsList])

    console.log(sectionsList);
    // console.log(isLoading);

    if (!sectionsList) {
        // TODO loader
        return 'loading...'
    }

    return <Container className={styles.container}>
        <ul className={styles.list}>
            {sectionsList.map(({name, docId}) => <li className={styles.listItem} key={docId}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={() => dispatch(sectionListActions.fetchSubSectionsList(sectionList, docId))}
                    >
                        <Typography>{name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </li>)}
        </ul>
    </Container>
}