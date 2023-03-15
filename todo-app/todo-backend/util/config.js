const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_HOST || undefined;
const PORT = process.env.PORT;

module.exports = {
  MONGO_URL,
  REDIS_URL,
  PORT,
};
