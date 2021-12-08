import multer from 'multer'

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn)

  console.log(res.locals)
  res.locals.siteName = 'Webank'
  next()
}
export const thumbnailUpload = multer({
  dest: 'uploads/thumbnail/',
})

export const plotUpload = multer({
  dest: 'uploads/plot/',
})
