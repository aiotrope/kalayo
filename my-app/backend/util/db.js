const mongoose = require("mongoose");
const { MONGO_URL } = require("../util/config");

const opts = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnection = () => {
  mongoose.set("strictQuery", false);

  mongoose.connect(MONGO_URL, opts);

  const db = mongoose.connection;
  db.once("open", () => {
    console.debug(`Database connected: ${MONGO_URL}`);
  });

  db.on("error", (error) => {
    console.error(`connection error: ${error}`);
  });
};

module.exports = dbConnection;
