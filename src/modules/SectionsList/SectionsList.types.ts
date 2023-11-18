export type SectionListProps = {
    sectionKey: SectionListUnion;
}

export enum SECTION_LIST {
    JAVASCRIPT = "JAVASCRIPT",
    REACT = "REACT"
}

export type SectionListUnion = keyof typeof SECTION_LIST;