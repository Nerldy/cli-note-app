console.log(`${'='.repeat(100)}>>`, 'starting notes app');

const yargs = require('yargs');
const notes = require('./notes');

const command = yargs
  . command('add', 'add a new note', {
    title: {
      describe: 'title of note',
      demand: true,
      alias: 't',
    },
    body: {
      describe: 'body of note',
      demand: true,
      alias: 'b',
    },
  })
  .command('list', 'lists all notes')
  .command('read', 'read a note', {
    title: {
      describe: 'title of note',
      demand: true,
      alias: 't',
    },
  })
  .command('remove', 'remove a note', {
    title: {
      describe: 'title of note',
      demand: true,
      alias: 't',
    },
  })
  .help()
  .argv._[0].toLowerCase();
const { title, body } = yargs.argv;


switch (command) {
  // adds a new note
  case 'add': {
    const noteContainer = notes.addNote(title, body);
    console.log(noteContainer);
    break;
  }

  // list all notes
  case 'list': {
    const listContainer = notes.listNotes();
    console.log(listContainer);
    break;
  }

  // read a note
  case 'read': {
    const readNoteContainer = notes.readNote(title);
    console.log(readNoteContainer);
    break;
  }

  // remove a note
  case 'remove': {
    const removeNoteContainer = notes.removeNote(title);
    console.log(removeNoteContainer);
    break;
  }

  default:
    console.log('Command doesn\'t exist');
}
