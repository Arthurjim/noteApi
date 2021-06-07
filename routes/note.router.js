const {Router}=require('express');

const router = Router()
const {getNotes} =require('../controllers/notes.controllers')

router.post('/notes',getNotes);

module.exports = router;