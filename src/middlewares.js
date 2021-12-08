import multer from 'multer'

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn)
  res.locals.siteName = 'Webank'
  res.locals.loggedInUser = req.session.user
  next()
}

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next()
  } else {
    return res.redirect('/login')
  }
}

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next()
  } else {
    return res.redirect('/')
  }
}
export const thumbnailUpload = multer({
  dest: 'uploads/thumbnail/',
})

export const plotUpload = multer({
  dest: 'uploads/plot/',
})
