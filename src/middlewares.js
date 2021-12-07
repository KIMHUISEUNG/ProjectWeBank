import multer from 'multer'

export const thumbnailUpload = multer({
  dest: 'uploads/thumbnail/',
})

export const plotUpload = multer({
  dest: 'uploads/plot/',
})
