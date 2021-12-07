export const remove = (req, res) => res.send('Remove User')
export const edit = (req, res) => res.send('Edit User')
export const login = (req, res) => {
  return res.render('login')
}
export const logout = (req, res) => res.send('logout')
export const profile = (req, res) => res.send("User's profile")
export const joinMembership = (req, res) => {
  return res.render('joinMembership')
}
