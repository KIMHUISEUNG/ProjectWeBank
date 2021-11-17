import express from 'express'
import { upload, info, edit, deleteToon } from '../controllers/toonController'

const toonRouter = express.Router()

toonRouter.get('/upload', upload)
toonRouter.get('/:id(\\d+)', info)
toonRouter.get('/:id(\\d+)/edit', edit)
toonRouter.get('/:id(\\d+)/delete', deleteToon)

export default toonRouter

/** \\d+ = 숫자만 받음 */
