const chlk = require('chalk')
const noteFun = require('./notes.js')
const yargs = require('yargs')

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    bulider: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Notes body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteFun.addNote(argv.title,argv.body)
    }
})
// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    bulider:{
        title:{
            describe: 'Title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
      noteFun.revNotes(argv.title)
    }
})
// Create List Command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler(){
        noteFun.listNotes()
    }
})
// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    bulider:{
        title:{
            describe: 'Title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteFun.readNotes(argv.title)
    }
})


 yargs.parse()