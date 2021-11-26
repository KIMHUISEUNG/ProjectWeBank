export const home = (req, res) => res.render('mainpage', { pageTitle: 'Home' })
export const info = (req, res) =>
  res.render('toon_info', { pageTitle: 'Infomation' })
export const edit = (req, res) =>
  res.render('toon_edit', { pageTitle: 'Edit User' })
export const search = (req, res) => res.send('Search')
export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'upload Webtoon' })
}
export const postsUpload = (req, res) => {
  return res.redirect('/')
}
export const deleteToon = (req, res) => {
  return res.send(`Delete toon #${req.params.id}`)
}
