export const APP_LINKS = {
    // links
    homePage: '/',
    sectionsListJavascript: '/sections-list-javascript/',
    sectionsListReact: '/sections-list-react/',
    questionsListJavascript: '/sections-list-javascript/:id',

    // utils
    buildQuestionListJavaScript: (sectionId: string, questionListId: string) => {
        return `/sections-list-javascript/${sectionId}-${questionListId}`
    }
}

export enum AVAILABLE_LANGS {
    javascript = 'javascript',
    html = 'html',
    css = 'css',
    react = 'react',
    java = 'java'
}

export type AvailableLangsUnion = keyof typeof AVAILABLE_LANGS;