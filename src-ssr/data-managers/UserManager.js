const UserModel  = require("../models/UserModel");
import  User from "../entities/User";
import crypto from "crypto";

class UserManager {

  static async getUsers() {
    const userModels = await UserModel.find();
    if (!userModels) return null;
    return userModels.map((userModel) => createUserFromModel(userModel));
  }

  static async getUserById(userID) {
    try {
      const userModel = await UserModel.findById(userID);
      return createUserFromModel(userModel);
    } catch (error) {
      console.error("UserManager - getUserById: ", error);
    }

  }
}

function createUserFromModel(userModel) {
  const user = new User(
    userModel._id.valueOf(),
    userModel.email,
    userModel.username,
    userModel.password,
    userModel.isVerified,
  );
  return user;
}

export default UserManager;
