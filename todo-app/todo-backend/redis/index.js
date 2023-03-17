const redis = require("redis");
const { promisify } = require("util");
const { REDIS_HOST, REDIS_PORT, REDIS_URL } = require("../util/config");

let getAsync;
let setAsync;
let client

if (!REDIS_HOST && !REDIS_PORT) {
  const redisIsDisabled = () => {
    console.log("No Redis URL set, Redis is disabled");
    return null;
  };
  getAsync = redisIsDisabled;
  setAsync = redisIsDisabled;
} else {
  client = redis.createClient({
    url: REDIS_URL,
    //host: REDIS_HOST,
    //port: REDIS_PORT,
  });

  getAsync = promisify(client.get).bind(client);
  setAsync = promisify(client.set).bind(client);
} 

module.exports = {
  getAsync,
  setAsync,
  client
};
