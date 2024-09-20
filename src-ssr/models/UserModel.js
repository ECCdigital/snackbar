import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../entities/User';

const Schema = mongoose.Schema;

const UserSchema = new Schema(User.schema());
UserSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  console.log(password);
  console.log(user.password);
  console.log(await bcrypt.hash(password, 10));
  return await bcrypt.compare(password, user.password);

};

UserSchema.index({ username: 1 }, { unique: true });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
