// @ts-check

import express from 'express'
import {
  getJoinMembership,
  postJoinMembership,
  getLogin,
  postLogin,
} from '../controllers/userController'
import { home, search } from '../controllers/toonController'
import { publicOnlyMiddleware } from '../../middlewares'

const rootRouter = express.Router()

rootRouter.get('/', home)
rootRouter
  .route('/join')
  .all(publicOnlyMiddleware)
  .get(getJoinMembership)
  .post(postJoinMembership)
rootRouter
  .route('/login')
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin)
rootRouter.get('/search', search)

export default rootRouter
