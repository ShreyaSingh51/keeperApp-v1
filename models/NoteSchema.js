const mongoose=require("mongoose");

//Schema
const Schema=mongoose.Schema;
const NoteSchema=new Schema({
    
    title:String,
    content:String
});

//Model
const Note=mongoose.model('Note',NoteSchema);

module.exports=Note;