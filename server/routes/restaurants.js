const express = require("express");
const router = express.Router();
const db = require("../db-init/dbConn");

//get all restaurants
router.get("/all", async (req, res, next) => {
  try {
    const result = await db.any("SELECT * FROM food");
    if (result.length < 1 || result === null) {
      res.status(400).send({
        status: 400,
        message: "No restaurants found",
      });
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: "success",
      });
    }
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: "Server Error ! Try again",
    });
  }
});

module.exports = router;
