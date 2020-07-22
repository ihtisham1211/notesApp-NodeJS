const fs = require('fs')
const chlk = require('chalk')

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('Data.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
            return data
    } catch(e){
        return[]
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('Data.json',dataJSON)
}

const addNote = (title,body)=>{
    const notes = loadNotes()
    // const notesTemp = notes.filter(function(notes){
    //     return notes.title === title
    // })
    const notesTemp = notes.find((notes)=> notes.title === title) //return undefine if dunlicate not found

    if(!notesTemp){  
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chlk.green('Note Added!'))
    }
    else{
        console.log(chlk.red('Note not Added!'))
    }
}

const revNotes = (title)=>{
    const notes = loadNotes()
    // const notesTemp = notes.filter(function(notes){
    //     return notes.title != title
    // })
    const notesTemp = notes.filter((notes)=>notes.title != title)

    if(notesTemp.length < notes.length){      
        console.log(chlk.green('Note Removed!'))
    }
    else{
        console.log(chlk.red('Note not Removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chlk.green('All Note: '))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title)=>{
    const notes = loadNotes()
    const notesTemp = notes.find((notes)=> notes.title === title)

    if(notesTemp){
        console.log(chlk.green('Note body: ' + notesTemp.body))
    }else{
        console.log(chlk.red('Note not found!'))
    }
}

module.exports = {
    addNote: addNote,
    revNotes: revNotes,
    listNotes: listNotes,
    readNotes: readNotes
}