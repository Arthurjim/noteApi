const mongoose = require('mongoose');
const {Schema,model}=mongoose;

const Note = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    idUser:{
        type:String,
        required:true,
        trim:true
    }

},{
    versionKey:false
})

module.exports = model('notes',Note)