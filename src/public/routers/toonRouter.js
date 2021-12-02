import express from 'express'
import {
  info,
  getUpload,
  postUpload,
  getEdit,
  postEdit,
  deleteToon,
} from '../controllers/toonController'

const toonRouter = express.Router()

toonRouter.get('/:id([0-9a-f]{24})', info)
toonRouter.route('/upload').get(getUpload).post(postUpload)
toonRouter.route('/:id([0-9a-f]{24})/edit').get(getEdit).post(postEdit)
toonRouter.route('/:id([0-9a-f]{24})/delete').get(deleteToon)

export default toonRouter

/** \\d+ = 숫자만 받음 */
