const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const PORT = process.env.PORT;

module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  //REDIS_URL: 'localhost:6378'
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_PORT,
  PORT,
};
