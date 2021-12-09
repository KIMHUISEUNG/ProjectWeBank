import express from 'express'
import { protectorMiddleware, avatarUpload } from '../../middlewares'
import {
  mypage,
  getEdit,
  postEdit,
  logout,
  getChangePassword,
  postChangePassword,
} from '../controllers/userController'

const userRouter = express.Router()

userRouter.get('/logout', protectorMiddleware, logout)
userRouter.get('/mypage', mypage)
userRouter
  .route('/edit')
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single('avatar'), postEdit)
userRouter
  .route('/changePassword')
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword)

export default userRouter
