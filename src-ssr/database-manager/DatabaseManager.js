import mongoose from "mongoose";
const logger = import("../middlewares/logger");

class DatabaseManager {
  constructor() {
    this.dbClient = null;
  }

  /**
   * Connect to the application database.
   *
   * @returns the Database object.
   */
  static async connect(dbName = process.env.DB_NAME) {
    if (this.dbClient) {
      logger.warn(`Database ${dbName} is already connected.`);
      return this.dbClient;
    }

    logger.info(`Connecting to database ${dbName}...`);
    try {
      const username = process.env.DB_USER;
      const password = process.env.DB_PASSWORD;
      const dbHost = process.env.DB_HOST;
      const dbPort = process.env.DB_PORT;

      if (!username || !password || !dbHost || !dbPort) {
        throw new Error("Database connection parameters are missing.");
      }

      const uri = `mongodb://${username}:${password}@${dbHost}:${dbPort}`;

      this.dbClient = await mongoose.connect(uri, {
        authSource: "admin",
        dbName: dbName,
      });

      mongoose.connection.on("connected", () => {
        logger.info(`Mongoose connected to database ${dbName}.`);
      });

      mongoose.connection.on("error", (err) => {
        logger.error(`Mongoose connection error on database ${dbName}: `, err);
      });

      mongoose.connection.on("disconnected", () => {
        logger.info(`Mongoose disconnected from database ${dbName}.`);
      });

      return this.dbClient;
    } catch (err) {
      logger.error(`Error connecting to database ${dbName}: `, err);
      throw err;
    }
  }
}

module.exports = DatabaseManager;
