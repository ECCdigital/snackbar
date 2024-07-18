const UserModel = import("../models/UserModel");
import User from "../classes/User";
import crypto from "crypto";

class UserManager {
  static async createUser(user) {
    const randomPassword = generateRandomPassword(16);
    const newUser = await UserModel.create({
      username: user.username,
      email: user.email,
      password: randomPassword,
      isVerified: user.isVerified,
    });
    const userID = newUser._id.valueOf();
    return await UserManager.getUserById(userID);
  }

  static async getUsers() {
    const userModels = await UserModel.find();
    if (!userModels) return null;
    return userModels.map((userModel) => createUserFromModel(userModel));
  }

  static async getUserById(userID, showAllFields = false) {
    const userModel = await UserModel.findById(userID);
    if (!userModel) return null;
    return createUserFromModel(userModel, showAllFields);
  }

  static async getUserByEmail(email, showAllFields = false) {
    const userModel = await UserModel.findOne({email: email});
    if (!userModel) return null;
    return createUserFromModel(userModel, showAllFields);
  }

  static async updateUser(userId, user) {
    await UserModel.updateOne({_id: userId}, user);
    return await UserManager.getUserById(userId);
  }

  static async deleteUser(userId) {
    await UserModel.deleteOne({_id: userId});
  }
}

function createUserFromModel(userModel, showAllFields = false) {
  const user = new User(
    userModel._id.valueOf(),
    userModel.email,
    userModel.password,
    userModel.isVerified,
  );
  if (!showAllFields) {
    user.removeSensitiveData();
  }
  return user;
}

function generateRandomPassword(length) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}

module.exports = UserManager;
