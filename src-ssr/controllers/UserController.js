import UserManager from "../data-managers/UserManager";
import ERROR_CODES from "../constants/errorCodes";

class UserController {

  static async getUser(req, res) {
    console.log("getUser")
    try {
      const {
        user,
        params: { id: requestedUserId },
      } = req;

      console.log("requestedUserId: ", requestedUserId)
      const requestedUser = await UserManager.getUserById(requestedUserId);
      console.log("requestedUser: ", requestedUser)
      return res.success(requestedUser);
    } catch (error) {
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserManager.getUsers();
      console.log("users: ", users)
      return res.success({users});
    } catch (error) {
      return res.error(error.code || ERROR_CODES.UNEXPECTED_ERROR);
    }
  }
}

export default UserController;

