import Webtoon from '../models/Webtoon'

export const home = async (req, res) => {
  const toons = await Webtoon.find({})
  return res.render('mainpage', { pageTitle: 'Home' })
}
export const info = async (req, res) => {
  const { id } = req.params
  const toon = await Webtoon.findById(id)
  if (!toon) {
    return res.status(404).render('404', { pageTitle: 'Webtoon not found.' })
  }
  console.log(toon.plot)
  return res.render('toon_info', { pageTitle: toon.title, toon })
}
export const getEdit = async (req, res) => {
  const { id } = req.params
  const toon = await Webtoon.findById(id)
  if (!toon) {
    return res.status(404).render('404', { pageTitle: 'Webtoon not found.' })
  }
  return res.render('toon_edit', { pageTitle: `Edit ${toon.title}`, toon })
}
export const postEdit = async (req, res) => {
  const { id } = req.params
  const { path: thumbnailUrl } = req.file
  const { title, writer, plot, hashtags, platform } = req.body
  const toon = await Webtoon.exists({ _id: id })
  if (!toon) {
    return res.status(404).render('404', { pageTitle: 'Webtoon not found.' })
  }
  await Webtoon.findByIdAndUpdate(id, {
    title,
    thumbnailUrl,
    writer,
    plot: Webtoon.uploadPlot(plot),
    hashtags: Webtoon.formatHashtags(hashtags),
    platform,
  })

  return res.redirect(`/toon/${id}`)
}
export const search = async (req, res) => {
  const { keyword } = req.query
  let toons = []
  if (keyword) {
    toons = await Webtoon.find({
      title: {
        $regex: new RegExp(keyword, 'i'), //제목에 keyword를 포함하는 영상을 찾을 것이다. i -> 대소문자 무시.
      },
    })
  }
  return res.render('search', { pageTitle: 'Search', toons })
}
export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'upload Webtoon' })
}
export const postUpload = async (req, res) => {
  const { path: thumbnailUrl } = req.file
  const { title, writer, plot, hashtags, platform } = req.body
  try {
    await Webtoon.create({
      title,
      thumbnailUrl,
      writer,
      plot,
      hashtags,
      platform,
    })
    return res.redirect('/')
  } catch (error) {
    return res.status(400).render('upload', {
      pageTitle: 'upload Webtoon',
      errorMessage: error._message,
    })
  }
}
export const deleteToon = async (req, res) => {
  const { id } = req.params
  await Webtoon.findByIdAndDelete(id)
  return res.redirect('/')
}
