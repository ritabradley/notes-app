const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true
    },
    body: {
      describe: 'Note body',
      demandOption: true
    }
  },
  handler() {
    console.log(chalk.bgRed.bgRgb(1, 181, 226).white.bold('Reading a note'));
  }
});
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    console.log(
      chalk.bgRed
        .rgb(255, 204, 0)
        .bgRgb(255, 128, 0)
        .bold('Listing all notes')
    );
  }
});

yargs.parse();
