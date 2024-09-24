import {createLogger} from "bunyan";

const loginRateLimit = (req, res, next) => {
  const maxLoginAttempts = parseInt(process.env.MAX_LOGIN_ATTEMPTS);
  const loginAttemptTimeout = parseInt(process.env.LOGIN_ATTEMPT_TIMEOUT);

  if (maxLoginAttempts && loginAttemptTimeout) {
    if (req.session.failedLoginAttempts >= maxLoginAttempts) {
      createLogger({ name: "server" }).warn("Too many failed login attempts");
      req.session.blockedUntil = Date.now() + loginAttemptTimeout;
      return res
        .status(429)
        .send("Too many failed login attempts. Please try again later.");
    } else if (
      req.session.blockedUntil &&
      req.session.blockedUntil > Date.now()
    ) {
      return res
        .status(429)
        .send("Too many failed login attempts. Please try again later.");
    }
  }

  next();
};

export default loginRateLimit;
