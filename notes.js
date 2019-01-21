const fs = require('fs');

const notesFileName = '/notes.json'; // file name holder
/**
 * Save file definition
 *
 * @param {string} path - path of file
 * @param {string} note - the note to be saved
 */
const saveFileJSON = (path, note) => {
  fs.writeFileSync(path, note);
  return 'Note has been added';
};

/**
 * fetch notes from file
 */
const fetchNotesFromFile = () => JSON.parse(fs.readFileSync(`${__dirname}${notesFileName}`, 'utf8'));


/**
 *add note definition
 *
 * @param {string} title - title of the note
 * @param {string} body - body of the note
 */
const addNote = (title = '', body = '') => {
  let noteList = [];
  let readNoteFromFile;
  const note = {
    title,
    body,
  };

  try {
    // check if the note exists and add to it
    if (fs.existsSync(`${__dirname}${notesFileName}`)) {
      readNoteFromFile = fetchNotesFromFile();

      //   check if a duplicate title exists
      const checkTitile = readNoteFromFile.filter(word => word.title === title || word.body === body);

      if (checkTitile.length >= 1) {
        return 'Title or body duplicate. Notes should have a uniq title and body.';
      }
      noteList = JSON.stringify([...readNoteFromFile, note]);
      return saveFileJSON(`${__dirname}${notesFileName}`, noteList);
    } // create the note
    noteList.push(note);
    return saveFileJSON(`${__dirname}${notesFileName}`, JSON.stringify(noteList));
  } catch (e) {
    return { error: e };
  }
};

/**
 * list notes definition
 */
const listNotes = () => {
  try {
    return fetchNotesFromFile();
  } catch (e) {
    return [];
  }
};

/**
 * read note definition
 * @param {string} title - title of the note
 */
const readNote = (title) => {
  try {
    return (fetchNotesFromFile().find(note => note.title === title)).body;
  } catch (e) {
    return `Note with title: ${title} doesn't exist.`;
  }
};


const removeNote = (title) => {
  try {
    const noteToRemove = fetchNotesFromFile().filter(note => note.title !== title);
    // remove the file
    fs.unlink(`${__dirname}${notesFileName}`, err => console.log(err));
    saveFileJSON(`${__dirname}${notesFileName}`, JSON.stringify(noteToRemove));
    return `Note with title ${title} has been removed`;
  } catch (e) {
    return `Note with title: ${title} doesn't exist.`;
  }
};


module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote,
};
