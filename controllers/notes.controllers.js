const Note = require('./note.schema')

const getNotes = async (req,res)=>{
    const id = req.body;
    try {
        const notas = await Note.find({id_user:id})
        res.status(200)
        return res.json(notes)
    } catch (error) {
        return res.status(404)
    }
}

module.exports = {
    getNotes
}