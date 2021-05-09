const yargs = require('yargs');
const notes = require('./notes')

//add
yargs.command({
    command:'add',
    describe:'adding',
    builder: {
        title:{
            describe:"title of the note",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addFun(argv.title, argv.body);
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'removing',
    builder: {
        title:{
            demandOption:true,
            type:'string',
            describe:'remove note'
        }
    },
    handler(argv) {
        notes.removeFun(argv.title)
    }
})
//list
yargs.command({
    command:'list',
    describe:'listing',
    handler() {
        notes.listFun()
    }
})
//read
yargs.command({
    command:'read',
    describe:'reading',
    builder: {
        title:{
            demandOption:true,
            type:'string',
            describe: 'read notes'
        }
    },
    handler(argv) {
        notes.readFun(argv.title)
    }
})

yargs.parse();