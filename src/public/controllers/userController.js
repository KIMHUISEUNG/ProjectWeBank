import User from '../models/User'

export const getJoinMembership = (req, res) => res.render('joinMembership')
export const postJoinMembership = async (req, res) => {
  const { email, username, password, passwordChecking, name, gender } = req.body
  const pageTitle = 'Join'
  if (password !== passwordChecking) {
    return res.status(400).render('joinMembership', {
      pageTitle,
      errorMessage: 'Password confirmaiton does not match.',
    })
  }
  const exists = await User.exists({ $or: [{ username }, { email }] })
  if (exists) {
    return res.status(400).render('joinMembership', {
      pageTitle,
      errorMessage: 'This username/email is already taken.',
    })
  }

  await User.create({
    email,
    username,
    password,
    name,
    gender,
  })
  return res.redirect('/login')
}
export const remove = (req, res) => res.send('Remove User')
export const edit = (req, res) => res.send('Edit User')
export const login = (req, res) => {
  return res.render('login')
}
export const logout = (req, res) => res.send('logout')
export const profile = (req, res) => res.send("User's profile")
