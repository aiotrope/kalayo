const redis = require("redis");
const { promisify } = require("util");
const { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } = require("../util/config");

let getAsync;
let setAsync;

if (!REDIS_HOST && !REDIS_PASSWORD && !REDIS_PORT) {
  const redisIsDisabled = () => {
    console.log("No Redis credentials set, Redis is disabled");
    return null;
  };
  getAsync = redisIsDisabled;
  setAsync = redisIsDisabled;
} else {
  const client = redis.createClient({
    host: REDIS_HOST,
    port: parseInt(REDIS_PORT),
    password: REDIS_PASSWORD,
  });

  getAsync = promisify(client.get).bind(client);
  setAsync = promisify(client.set).bind(client);
}

module.exports = {
  getAsync,
  setAsync,
};
