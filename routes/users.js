import express from 'express'
const router = express.Router()

// import user functions
import {
    getUsers , addUser , getUser , deleteUser
} from '../controllers/users.js'

// user routes

router.get('/' , getUsers )
router.post('/' , addUser )
router.get('/:uuid' , getUser)
router.delete('/:uuid' , deleteUser)

export default router;