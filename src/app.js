// @ts-check

/** eslint-disable no-console */

import express from 'express'
import morgan from 'morgan'
import rootRouter from './public/routers/rootRouter'
import userRouter from './public/routers/userRouter'
import toonRouter from './public/routers/toonRouter'
/**import { render } from 'pug'*/
/**const { request } = require('http')*/

const app = express()
const logger = morgan('tiny')

app.use(express.json())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'pug')
app.use(logger)
app.use(express.urlencoded({ extended: true })) //application에게 form을 처리하고싶다고 말함.
app.use('/public', express.static('src/public'))
app.use('/uploads', express.static('uploads'))

// this work is JMT...

app.use('/', rootRouter)
app.use('/user', userRouter)
app.use('/toon', toonRouter)

export default app
