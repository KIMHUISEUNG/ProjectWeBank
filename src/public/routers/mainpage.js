// @ts-check

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('mainpage', {
    title: 'webank',
  })
})

module.exports = router
