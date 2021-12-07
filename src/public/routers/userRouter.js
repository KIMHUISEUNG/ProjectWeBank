import express from 'express'
import {
  edit,
  remove,
  login,
  logout,
  joinMembership,
} from '../controllers/userController'

const userRouter = express.Router()

userRouter.get('/login', login)
userRouter.get('/joinMembership', joinMembership)
userRouter.get('/logout', logout)
userRouter.get('/edit', edit)
userRouter.get('/remove', remove)
userRouter.get('/:id', login)

export default userRouter
