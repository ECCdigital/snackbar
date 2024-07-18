import logger from "./logger.js";

module.exports = (err, req, res, next) => {
  logger.error(err); // Loggen des Fehlers

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).send({
    error: "Internal Server Error",
    message:
      process.env.NODE_ENV === "production" ? "An error occurred" : err.message,
  });
};
