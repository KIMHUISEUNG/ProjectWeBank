// @ts-check

import express from 'express'
import {
  getJoinMembership,
  postJoinMembership,
  login,
} from '../controllers/userController'
import { home, search } from '../controllers/toonController'

const rootRouter = express.Router()

rootRouter.get('/', home)
rootRouter.route('/join').get(getJoinMembership).post(postJoinMembership)
rootRouter.get('/login', login)
rootRouter.get('/search', search)

export default rootRouter
