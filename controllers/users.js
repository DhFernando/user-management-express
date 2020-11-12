let users = [
    { uuid : 1, name : "Dilshan Fernando", Age : 24 }
]

// uuid for user unq id
let uuid = 2

export const getUsers = (req, res)=>{
    res.send(users)
}

export const addUser = (req , res)=>{
    users.push({ ...req.body , uuid : uuid++ })
    res.send(users)
}

export const getUser = (req , res)=>{
    const { uuid } = req.params

    const results = users.filter(el => el.uuid.toString() == uuid.toString())
    res.send( results )
}

export const deleteUser = (req , res)=>{
    const { uuid } = req.params

    let index = users.findIndex(el => el.uuid.toString() == uuid.toString())

    if(index != -1 ) {
        users.splice(index , 1)
        res.send( `${uuid} had been removed from the Database` )
    }else{
        res.send(`could not find ${uuid} user`)
    }
}