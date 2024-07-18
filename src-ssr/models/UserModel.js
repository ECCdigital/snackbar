import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../classes/User';

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
  return await bcrypt.compare(password, user.password);
};

UserSchema.index({ email: 1 }, { unique: true });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
