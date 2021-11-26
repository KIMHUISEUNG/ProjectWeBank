//webtoon data table

import mongoose from 'mongoose'

const webtoonSchema = new mongoose.Schema({
  title: String,
  writer: [{ type: String }],
  plot: String,
  hashtags: [{ type: String }],
  platform: [{ type: String }],
  meta: {
    rating: Number,
  },
})

const Webtoon = mongoose.model('Webtoon', webtoonSchema)
export default Webtoon
