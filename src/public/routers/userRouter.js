import express from 'express'
import {
  mypage,
  getEdit,
  postEdit,
  logout,
} from '../controllers/userController'

const userRouter = express.Router()

userRouter.get('/logout', logout)
userRouter.get('/mypage', mypage)
userRouter.route('/edit').get(getEdit).post(postEdit)

export default userRouter
