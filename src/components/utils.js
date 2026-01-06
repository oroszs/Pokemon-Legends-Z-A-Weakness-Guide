export const toTitleCase = (string) => {
    let updatedString = string.replace(/\b\w/g, s => s.toUpperCase());
    return updatedString;
}