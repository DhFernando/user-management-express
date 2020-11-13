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

const addUser = (req , res)=>{
    users.push({ ...req.body , uuid : uuid++ })
    res.send(users)
}

const getUser = (req , res)=>{
    const { uuid } = req.params

    const results = users.filter(el => el.uuid.toString() == uuid.toString())
    res.send( results )
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

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    getUser
};