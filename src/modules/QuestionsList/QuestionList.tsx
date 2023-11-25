import styles from './styles.module.scss';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {QuestionListProps} from "./QuestionList.types.ts";
import {useLocation, useParams} from "react-router";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store.ts";
import {questionListActions} from "./store/slice.actions.ts";
import {separeteIds} from "../../utils/router.ts";
import {questionListSelectors} from "./store/slice.selectors.ts";
import {ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {Question} from "../Question";
import {Header} from "../Header";
import {sectionsListSelectors} from "../SectionsList/store/slice.selectors.ts";
import {sectionListActions} from "../SectionsList/store/slice.actions.ts";
import {APP_LINKS} from "../../App.const.ts";
import {SectionListSubSectionData} from "../SectionsList/store/slice.types.ts";

export const QuestionList = ({sectionKey}: QuestionListProps) => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const isLoading = useAppSelector(questionListSelectors.isLoading);
    const questions = useAppSelector(questionListSelectors.questions);
    const sectionsIsLoading = useAppSelector(sectionsListSelectors.isLoading)[sectionKey];
    const sectionsList = useAppSelector(sectionsListSelectors.sections)[sectionKey];

    const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);

    const [sectionId, questionListId] = separeteIds(params.id as string);

    useEffect(() => {
        if (!sectionsIsLoading && !sectionsList) {
            console.log('fetchlog');
            dispatch(sectionListActions.fetchSectionsList(sectionKey));
        }
    }, [dispatch, isLoading, sectionKey, sectionsIsLoading, sectionsList])

    useEffect(() => {
        // console.log(params);
        if (!isLoading && !questions) {
            dispatch(questionListActions.fetchSectionsList(sectionId, questionListId))
        }
    }, [dispatch, isLoading, params.id, params.subSectionId, questionListId, questions, sectionId, sectionKey])

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setCurrentQuestionId(queryParams.get("questionId"));
    }, [location])


    const getSubSections = useCallback((sectionId: string): Array<SectionListSubSectionData> | null => {
        if (!sectionsList) return null;
        return sectionsList.find(({docId}) => docId === sectionId)?.subSections ?? null;
    }, [sectionsList]);

    useEffect(() => {
        const subSections = getSubSections(sectionId);
        if (!subSections && sectionsList) {
            dispatch(sectionListActions.fetchSubSectionsList(sectionKey, sectionId))
        }
    }, [dispatch, getSubSections, sectionId, sectionKey, sectionsList])


    const createQuestionLink = useCallback((detailsDocId: string) => {
        const {pathname} = location;
        return `${pathname}?questionId=${detailsDocId}`;
    }, [location])

    const headerItems = useMemo(() => {
        const payload = [{name: 'JavaScript sections', link: ''}];

        if (sectionsList) {
            const sectionList = sectionsList.find((el) => el.docId === sectionId);

            if (sectionList) {
                const {name, subSections} = sectionList;
                const subSection = subSections?.find(el => el.docId === questionListId)?.name ?? '';
                payload.push({name: `${name} - ${subSection}`, link: APP_LINKS.sectionsListJavascript});
            }


        }

        return payload;
    }, [questionListId, sectionId, sectionsList])


    if (!questions || !sectionsList) {
        // TODO add loader
        return 'loading...'
    }

    return <Box bgcolor="primary.main" className={styles.listContainer}>
        <div className={styles.listWrapper}>
            <Header items={headerItems}/>
            <ul className={styles.list}>
                {questions.map(({name, detailsDocId}, index) => {
                    return <ListItem sx={{
                        padding: 0,
                        "a": {
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            color: 'text.primary',
                            paddingTop: '12px',
                            paddingBottom: '12px',
                            paddingLeft: '4px',
                            paddingRight: '16px',
                            borderBottom: '2px solid',
                            borderBottomColor: detailsDocId === currentQuestionId ? 'secondary.light' : 'primary.light',
                            "&:hover": {
                                borderBottomColor: 'secondary.dark'
                            },
                            "span": {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                height: '24px',
                                width: '24px',
                                minHeight: '24px',
                                minWidth: '24px',
                                backgroundColor: detailsDocId === currentQuestionId ? 'secondary.light' : 'primary.light',
                                borderRadius: '4px',
                                marginRight: '12px',
                                color: detailsDocId === currentQuestionId ? 'black' : 'white',
                            }
                        }
                    }} key={detailsDocId}>

                        <Link to={createQuestionLink(detailsDocId)}>
                            <span>{index + 1}</span>
                            <Typography fontSize={16}>{name}</Typography>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </div>
        {currentQuestionId && <div className={styles.answerContainer}><Question id={currentQuestionId}/></div>}

    </Box>
}