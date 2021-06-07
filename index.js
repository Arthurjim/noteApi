const express = require('express');
const app = express()
const cors = require('cors')
require('./connection/database')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))//poder entender peticiones desde fer
app.use(require('./routes/user.router'))
app.use(require('./routes/note.router'))

app.get('/', function(req,res){
    res.send({
        message:"/USERS"
    })
})


app.listen(4000, ()=>{
    console.log(`Listen on port 4000`)
})