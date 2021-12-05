import multer from 'multer'
export const thumbnailUpload = multer({
  dest: 'uploads/thumbnail/',
})
