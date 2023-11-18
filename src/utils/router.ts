export const separeteIds = (inputString: string) => {
    const ids = inputString.split('-');
    return ids.map(id => id.trim());
}