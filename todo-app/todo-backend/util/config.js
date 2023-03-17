const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;
const REDIS_HOST = process.env.REDIS_HOST || undefined;
const REDIS_PORT = process.env.REDIS_PORT || undefined;
const PORT = process.env.PORT;

module.exports = {
  MONGO_URL,
  REDIS_URL,
  REDIS_HOST,
  REDIS_PORT,
  PORT,
};
