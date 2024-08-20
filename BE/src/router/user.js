import express from "express"
import { createUser, filterUser, GetUser, userDelete, users, userUpdate } from '../controller/users.js'

const user = express.Router()

user.get('/', users).get('/filterUser',filterUser).get('/id/:id',GetUser).post('/create',createUser).put('/:id',userUpdate).delete('/:id',userDelete)

export {user}