// @ts-check

/** eslint-disable no-console */
import './db'
import './public/models/Webtoon'
import express from 'express'
import mainRouter from './public/routers/mainRouter'
import userRouter from './public/routers/userRouter'
import toonRouter from './public/routers/toonRouter'
/**import { render } from 'pug'*/
/**const { request } = require('http')*/

const PORT = 5050

const app = express()

app.use(express.json())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'pug')
//application에게 form을 처리하고싶다고 말함.
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('src/public'))

// this work is JMT...

app.use('/', mainRouter)
app.use('/user', userRouter)
app.use('/toon', toonRouter)

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT}`)

app.listen(PORT, handleListening)
