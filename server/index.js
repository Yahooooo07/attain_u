// Requiring all the constants which will be required for the setup - Eli
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");
const logger = require("morgan");
const users = require("./routes/users");
const food = require("./routes/restaurants");
const db = require("./db-init/dbConn");

// Declaring App to use Express Framework - Eli
const app = express();

// Setting bodyParser, CORS, log generation, the files to be used to the Express App - Eli
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(logger("common"));
app.use("/api/users/", users);
app.use("/api/food/", food);
app.use((err, req, res, next) => {
  next(error(err, req, res, next));
});
app.disable("etag");

const port = process.env.PORT || 5010;

db.connect()
  .then((obj) => {
    obj.done(); // success, release connection;
    if (process.env.NODE_ENV !== "test")
      app.listen(port, () =>
        console.log(`Server is listening at http://localhost:${port}`)
      );
  })
  .catch((error) => {
    console.log("ERROR:", error.message);
  });

module.exports = app;
