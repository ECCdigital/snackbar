const UserModel  = require("../models/UserModel");
import  User from "../entities/User";
import crypto from "crypto";

class UserManager {

  static async getUsers() {
    console.log("userModel: ", UserModel);
    const userModels = await UserModel.find();
    console.log("userModels: ", userModels);
    if (!userModels) return null;
    return userModels.map((userModel) => createUserFromModel(userModel));
  }

  static async getUserById(userID) {
    console.log("userID: ", userID);
    try {
      const userModel = await UserModel.findById(userID);
      return createUserFromModel(userModel);
    } catch (error) {
      console.log(error);
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
