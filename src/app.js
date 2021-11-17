// @ts-check

/** eslint-disable no-console */
import express from 'express'
import mainRouter from './public/routers/mainRouter'
import userRouter from './public/routers/userRouter'
import toonRouter from './public/routers/toonRouter'
/**const { request } = require('http')*/

const PORT = 5050

const app = express()

app.use(express.json())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'pug')

app.use('/', mainRouter)
app.use('/user', userRouter)
app.use('/toon', toonRouter)

app.listen(PORT)
