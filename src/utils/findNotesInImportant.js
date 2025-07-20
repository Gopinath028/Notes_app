export const findNotesInImportant = (important, id) =>  {
    return important.find(note => note.id === id);
};