import UserManager from "../data-managers/UserManager";
import ERROR_CODES from "../constants/errorCodes";
const logger = import("../middlewares/logger");

class UserController {
  static async getUser(req, res) {
    try {
      const {
        user,
        params: { id: requestedUserId },
      } = req;

      const requestedUser = await UserManager.getUserById(requestedUserId);
      return res.success(requestedUser);
    } catch (error) {
      logger.error("UserController - getUser: ", error);
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserManager.getUsers();
      return res.success({ users });
    } catch (error) {
      logger.error("UserController - getUsers: ", error);
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }

  static async createUser(req, res) {
    try {
      const user = req.body;
      const newUser = await UserManager.createUser(user);
      return res.success(newUser);
    } catch (error) {
      logger.error("UserController - createUser: ", error);
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }

  static async updateUser(req, res) {
    try {
      const {
        user,
        params: { id: requestedUserId },
        body: { user: userToUpdate },
      } = req;

      if (user.id !== requestedUserId) {
        return res.error(ERROR_CODES.UNAUTHORIZED);
      }

      const updatedUser = await UserManager.updateUser(requestedUserId, updatedUser);
      return res.success(updatedUser);
    } catch (error) {
      logger.error("UserController - updateUser: ", error);
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }

  static async deleteUser(req, res) {
    try {
      const {
        user,
        params: { id: requestedUserId },
      } = req;

      if (user.id !== requestedUserId) {
        return res.error(ERROR_CODES.UNAUTHORIZED);
      }

      await UserManager.deleteUser(requestedUserId);
      return res.success();
    } catch (error) {
      logger.error("UserController - deleteUser: ", error);
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }
}

module.exports = UserController;

