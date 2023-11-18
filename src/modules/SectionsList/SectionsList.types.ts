export type SectionListProps = {
    sectionList: SectionListUnion;
}

export enum SECTION_LIST {
    JAVASCRIPT = "JAVASCRIPT",
    REACT = "REACT"
}

export type SectionListUnion = keyof typeof SECTION_LIST;