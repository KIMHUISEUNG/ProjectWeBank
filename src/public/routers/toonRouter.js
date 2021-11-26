import express from 'express'
import {
  getUpload,
  postsUpload,
  info,
  edit,
  deleteToon,
} from '../controllers/toonController'

const toonRouter = express.Router()

toonRouter.route('/upload').get(getUpload).post(postsUpload)
toonRouter.get('/:id(\\d+)', info)
toonRouter.get('/:id(\\d+)/edit', edit)
toonRouter.get('/:id(\\d+)/delete', deleteToon)

export default toonRouter

/** \\d+ = 숫자만 받음 */
