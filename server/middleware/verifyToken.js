const jwt = require("jsonwebtoken");
const config = require("config");
const jwtPrivateKey = config.get("jwtPrivateKey");

module.exports = (token) => {
  jwt.verify(token, jwtPrivateKey, (err) => {
    if (err) console.log("consoling errr", err);
    else {
      console.log("token verified");
    }
  });
};
