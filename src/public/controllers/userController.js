import User from '../models/User'
import bcrypt from 'bcrypt'

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
  try {
    await User.create({
      email,
      username,
      password,
      name,
      gender,
    })
    return res.redirect('/login')
  } catch (error) {
    return rea.status(400).render('joinMembership', {
      pageTitle,
      errorMessage: 'This username/email is already taken.',
    })
  }
}

export const getLogin = (req, res) =>
  res.render('login', { pageTitle: 'Login' })

export const postLogin = async (req, res) => {
  const { username, password } = req.body
  const pageTitle = 'Login'

  const user = await User.findOne({ username })
  if (!user) {
    return res.status(400).render('login', {
      pageTitle,
      errorMessage: '잘못된 아이디나 비밀번호입니다..',
    })
  }
  const ok = await bcrypt.compare(password, user.password)
  if (!ok) {
    return res.status(400).render('login', {
      pageTitle,
      errorMessage: '잘못된 비밀번호 입니다.',
    })
  }

  req.session.loggedIn = true
  req.session.user = user

  return res.redirect('/')
}
export const mypage = (req, res) => res.render('mypage')
export const getEdit = (req, res) => {
  return res.render('user_edit', { pageTitle: 'Edit Profile' })
}
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { name, email },
  } = req
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      name,
      email,
    },
    { new: true }
  )
  req.session.user = updatedUser
  return res.redirect('/user/edit')
}
export const logout = (req, res) => {
  req.session.destroy()
  return res.redirect('/')
}
