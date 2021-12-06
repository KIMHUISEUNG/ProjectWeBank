// @ts-check

import express from 'express'
import { joinMembership, login } from '../controllers/userController'
import { home, search } from '../controllers/toonController'
const mainRouter = express.Router()

mainRouter.get('/', home)
mainRouter.get('/join', joinMembership)
mainRouter.get('/login', login)
mainRouter.get('/search', search)

export default mainRouter
