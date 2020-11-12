import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 2000

app.use(bodyParser.json())

app.use('/users' , usersRoutes )

app.get('/' , (req,res)=>{
    res.send('Hello Express')
})
 
app.listen(PORT , ()=>{
    console.log(`start api localhost:${PORT}`)
})