const User = require('./user.schema');
let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("B4c0/\/", salt);

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});


const getUsers =async (req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.json({
            message:"Try in other moment"
        });
    }
}
const getOneUser =async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email})
        const successPassword = await bcrypt.compare(password,user.password)
        if(!successPassword){
            return res.status(404).send('Password incorrect')
        }
        return res.status(200).send(user)
    } catch (error) {
        console.log('not found')
        return  res.status(404).send('User not found');
    }
}

const createUser = async(req,res)=>{
    const {email} = req.body;
    console.log(req.body)
        try{
        const checkEmail = await User.findOne({email})
        if(checkEmail){
            return res.json('Email used')
        }
    
        const newUser =  new User(req.body)
        newUser.password = await bcrypt.hash(newUser.password,salt)
        const savedUser = await newUser.save()
        return res.status(201).send(savedUser)
    }catch(e){
        console.log(e)
    }
}

module.exports= {
    getUsers,
    getOneUser,
    createUser
}

