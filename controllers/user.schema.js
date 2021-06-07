const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const User = new Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
        trim:true
    }
    
},{
    versionKey:false
})

module.exports = model('users',User);