import UserManager from "app/src-ssr/data-managers/UserManager";
import UserModel from "app/src-ssr/models/UserModel";

class AuthController {
  static async me(req, res) {
    try {
      const { user } = req;
      if (!user) {
        return res.error(401);
      }
      const me = await UserManager.getUserById(user.id);

      return res.success({user: me});
    } catch (err) {
      console.log("AuthController - me: ", err);
      return res.error(err.code);
    }
  }

  static async devLogin(req, res) {
    try {
      const {username} = req.body;
      if (username === "dev") {
        req.session.userId = "12345";
        const devUserData = {
          _id: "12345",
          username: "dev",
          email: "test",
          password: "test",
          isVerified: true
        };
        req.session.user = devUserData;
        return res.success();
      }
    } catch (err) {
      console.log("AuthController - devLogin: ", err);
      return res.error(err.code);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await UserModel.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Ungültige Anmeldedaten 1' });
      }

      // Passwort überprüfen
      const isPasswordValid = await user.isValidPassword(password);

      console.log('isPasswordValid:', isPasswordValid);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Ungültige Anmeldedaten 2' });
      }

      res.json({
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          password: user.password,
          isVerified: user.isVerified
        }
      });
    } catch (error) {
      console.error(error);
      res.error(500);
    }
  }

  static async logout(req, res) {
    req.logout((err) => {
      if (err) {
        return res.error(500);
      }
    });
    return res.success();
  }

  static async isSignedIn(req, res, next) {
    if(req.session && req.session.userId) {
      return next();
    }
    res.error(401);
  }
}

export default AuthController;
