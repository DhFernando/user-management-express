const User = require('../models/User')

let users = [
    { uuid : 1, name : "Dilshan Fernando", Age : 24 }
]

// uuid for user unq id
let uuid = 2

 const getUsers = async (req, res)=>{
    const _users = await User.find() // fetch all users from mongo db
    res.send( _users )
}

const addUser = async(req , res)=>{ 
    const newUser = new User(req.body)
    try{
        const addedUser = await newUser.save()
        res.status(201).json(addedUser)
    }catch(err){
        res.status(400).json( {message : err.message} )
    }
}

const getUser = async (req , res)=>{
    const { uuid } = req.params

    try{ 
        res.status(201).json(await findUser(uuid))
    }catch(err){
        res.status(400).json( {message : err.message} )
    }
}

const deleteUser = (req , res)=>{
    const { uuid } = req.params

    let index = users.findIndex(el => el.uuid.toString() == uuid.toString())

    if(index != -1 ) {
        users.splice(index , 1)
        res.send( `${uuid} had been removed from the Database` )
    }else{
        res.send(`could not find ${uuid} user`)
    }
}

const findUser = async( uuid ) =>{
    let user = null
    try{
        user = await User.findById(uuid)
        if( user == null ) return res.status(404).json({ message : 'oops !! .. :-( Cannot find user' }) ; 
        return  user
    }catch(err){
        return res.status(500).json( {message : err.message} )
    }
}

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    getUser
};