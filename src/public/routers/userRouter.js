import express from 'express'
import { protectorMiddleware } from '../../middlewares'
import {
  mypage,
  getEdit,
  postEdit,
  logout,
} from '../controllers/userController'

const userRouter = express.Router()

userRouter.get('/logout', protectorMiddleware, logout)
userRouter.get('/mypage', mypage)
userRouter.route('/edit').all(protectorMiddleware).get(getEdit).post(postEdit)

export default userRouter
