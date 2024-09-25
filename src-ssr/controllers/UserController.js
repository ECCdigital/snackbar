import UserManager from "../data-managers/UserManager";
import ERROR_CODES from "../constants/errorCodes";

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
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserManager.getUsers();
      return res.success({users});
    } catch (error) {
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }
}

export default UserController;

