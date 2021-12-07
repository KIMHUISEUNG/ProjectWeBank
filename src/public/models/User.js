import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, trim: true },
  password: { type: String, required: true, minlength: 8 },
  email: { type: String, trim: true },
  name: { type: String, required: true, trim: true },
  nickname: [{ type: String, trim: true }],
})

const User = mongoose.model('User', UserSchema)
export default User
