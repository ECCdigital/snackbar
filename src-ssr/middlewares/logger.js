import bunyan from "bunyan";
import morgan from "morgan";
import packageJson from "../../package.json";

// Bunyan Logger
const logger = bunyan.createLogger({
  name: packageJson?.name,
  streams: [
    {
      stream: process.stdout,
      level: process.env.LOG_LEVEL || "info",
    },
  ],
});

// Morgan Konfiguration mit Bunyan
const morganMiddleware = morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

module.exports = { logger, morganMiddleware };
