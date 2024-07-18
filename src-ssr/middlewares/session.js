import session from "express-session";
import MongoStore from "connect-mongo";

const sessionMiddleware = (req, res, next) => {
  const username = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbPort = process.env.DB_PORT;
  const dbName = process.env.DB_NAME;

  if (!username || !password || !dbHost || !dbPort) {
    throw new Error("Database connection parameters are missing.");
  }

  const uri = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`;

  const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
    store: MongoStore.create({
      mongoUrl: `${uri}?authSource=admin&w=1`,
      collection: "sessions",
    }),
  };

  session(sessionConfig)(req, res, next);
};

export default sessionMiddleware;
