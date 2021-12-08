// @ts-check

import express from 'express'
import {
  getJoinMembership,
  postJoinMembership,
  getLogin,
  postLogin,
} from '../controllers/userController'
import { home, search } from '../controllers/toonController'

const rootRouter = express.Router()

rootRouter.get('/', home)
rootRouter.route('/join').get(getJoinMembership).post(postJoinMembership)
rootRouter.route('/login').get(getLogin).post(postLogin)
rootRouter.get('/search', search)

export default rootRouter
