import cors from "cors";
const corsOrigin = process.env.API_BASE_URL || "*";
const parsedCorsOrigin = corsOrigin.split(",").map((origin) => origin.trim());

const corsOptions = {
  credentials: true,
  origin: parsedCorsOrigin,
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: [
    "X-Requested-With",
    "X-HTTP-Method-Override",
    "Content-Type",
    "Accept",
  ],
};

module.exports = cors(corsOptions);
