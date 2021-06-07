const {Router} = require('express');

const router = Router()
const {getUsers,getOneUser,createUser} =require('../controllers/user.controller')

router.get('/users',getUsers);
router.post('/userLogin',getOneUser);
router.post('/createUser',createUser);


 

module.exports = router;