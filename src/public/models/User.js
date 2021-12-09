import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  avatarUrl: String,
  username: { type: String, required: true, unique: true }, //얘가 id
  password: { type: String, required: true, minlength: 8 },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  gender: { type: String },
})

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 5)
})

const User = mongoose.model('User', userSchema)
export default User
