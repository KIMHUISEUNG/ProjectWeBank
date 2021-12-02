//webtoon data table

import mongoose from 'mongoose'

const webtoonSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  writer: { type: String, trim: true },
  plot: { type: String, required: true, trim: true },
  hashtags: [{ type: String, trim: true }],
  platform: [{ type: String, trim: true }],
  meta: {
    rating: { type: Number, default: 0, required: true },
  },
})

webtoonSchema.static('formatHashtags', function (hashtags) {
  return hashtags
    .split(',')
    .map((word) => (word.startsWith('#') ? word : `#${word}`))
})

const Webtoon = mongoose.model('Webtoon', webtoonSchema)
export default Webtoon
