const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return chalk.bgBlueBright.white.bold('Your notes...');
};

// Function to add a note to the notes.json file

const addNote = (title, body) => {
  // *Loads array of notes
  const notes = loadNotes();
  // *Filters out the note with a title that matches the passed title argument
  const duplicates = notes.filter(note => note.title === title);
  if (duplicates.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
  } else {
    return 'Choose a different title';
  }
};

// Function to remove a note from the JSON file by comparing the passed title argument

const removeNote = title => {
  const notes = loadNotes();
  // * Filter the notes array and keep the notes that don't match the title passed as an argument
  const keptNotes = notes.filter(note => note.title !== title);

  notes.length > keptNotes.length
    ? console.log(chalk.bgGreen.white('Note removed!'))
    : console.log(chalk.bgRed.white('No note removed!'));

  saveNotes(keptNotes);
};

const saveNotes = notes => {
  const data = JSON.stringify(notes);
  fs.writeFileSync('notes.json', data);
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('./notes.json');
    const data = buffer.toString();
    const parsedData = JSON.parse(data);

    return parsedData;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
