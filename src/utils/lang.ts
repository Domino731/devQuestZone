import {AVAILABLE_LANGS, AvailableLangsUnion} from "../App.const.ts";

export const lang = (language: AvailableLangsUnion) => {
    // Color from language logo
    switch (language) {
        case "javascript":
            return '#ffdd46';
        case AVAILABLE_LANGS.html:
            return '#e54d27';
        case AVAILABLE_LANGS.css:
            return '#1b88c7';
        case AVAILABLE_LANGS.react:
            return '#00d8fe';
        case AVAILABLE_LANGS.java:
            return '#e11f20';
        default:
            return 'red';
    }
}

export const getLangHeaderTextColor = (language: AvailableLangsUnion) => {
    switch (language) {
        case AVAILABLE_LANGS.javascript:
            return '#000000';
        case AVAILABLE_LANGS.html:
            return '#000000';
        case AVAILABLE_LANGS.css:
            return '#ffffff';
        case AVAILABLE_LANGS.react:
            return '#222222';
        case AVAILABLE_LANGS.java:
            return '#000000';
        default:
            return 'white'
    }
}

export const getlangText = (language: AvailableLangsUnion) => {
    switch (language) {
        case AVAILABLE_LANGS.javascript:
            return 'JavaScript'
        case AVAILABLE_LANGS.html:
            return 'HTML';
        case AVAILABLE_LANGS.css:
            return 'CSS';
        case AVAILABLE_LANGS.react:
            return 'React';
        case AVAILABLE_LANGS.java:
            return 'Java';
        default:
            return 'UNKNOWN'
    }
}