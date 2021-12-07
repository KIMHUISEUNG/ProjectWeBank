//webtoon data table

import mongoose from 'mongoose'

const webtoonSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  thumbnailUrl: { type: String, required: true },
  writer: { type: String, trim: true },
  plot: { type: String, required: true },
  hashtags: [{ type: String, trim: true }],
  platform: [{ type: String, required: true }],
  meta: {
    rating: { type: Number, default: 0, required: true },
  },
})

webtoonSchema.static('formatHashtags', function (hashtags) {
  return hashtags
    .split(',')
    .map((word) => (word.startsWith('#') ? word : `#${word}`))
})

webtoonSchema.static('uploadPlot', function (plot) {
  if (plot == undefined || plot == null) {
    return ''
  }

  plot = plot.replace(/<br>/gi, '\n')
  plot = plot.replace(/<\/br>/gi, '\n')
  plot = plot.replace(/<br \/>/gi, '\n')
  return plot
})
webtoonSchema.static('printPlot', function (plot) {
  if (plot == undefined || plot == null) {
    return ''
  }
  plot = plot.replace(/\r\n/gi, '<br>')
  plot = plot.replace(/\\n/gi, '<br>')
  plot = plot.replace(/\n/gi, '<br>')
  return plot
})

const Webtoon = mongoose.model('Webtoon', webtoonSchema)
export default Webtoon
