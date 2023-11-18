export type SectionListItemData = {
    name: string;
    docId: string;
    subSections: null | Array<SectionListSubSectionData>;
}

export type SectionListSubSectionData = {
    name: string;
    docId: string;
}