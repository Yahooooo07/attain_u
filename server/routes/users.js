const express = require("express");
const router = express.Router();
const db = require("../db-init/dbConn");
const bcrypt = require("bcrypt");

const generateToken = require("../middleware/generateToken");

router.post("/signup", async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const userFullName = req.body.user_full_name;
  const userPhone = req.body.user_phone;
  const userEmail = req.body.user_email;
  const userName = req.body.user_name;
  const userPassword = await bcrypt.hash(req.body.user_password, salt);

  try {
    // check if user exists
    const userExist = await db.any(
      `Select * from users where user_email = '${userEmail}'`
    );

    if (userExist.length > 0) {
      res.status(200).json({
        status: 200,
        message: "User already exists!",
      });
    } else {
      // create a new user
      const result = await db.one(
        `INSERT INTO users(user_full_name, user_phone, user_email, user_name, user_password) VALUES($1, $2, $3, $4, $5) RETURNING user_id`,
        [userFullName, userPhone, userEmail, userName, userPassword]
      );

      res.status(200).json({
        status: 200,
        message: "User Created Successfully!",
        data: result,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      message: "Failed to Create a User!",
    });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    let userEmail = req.body.user_email;
    let userPassword = req.body.user_password;

    const db_result = await db.any(
      `select * from users where user_email = '${userEmail}'`
    );

    if (db_result.length != 1)
      return res.status(200).json({status:200, message: "Email not registered", loggedIn:'email' });

    let compare_result = await bcrypt.compare(
      userPassword,
      db_result[0].user_password
    );

    if (!compare_result) {
      return res.status(200).send({status:200, message: "Invalid Password!", loggedIn:'password' });
    } else {
      let userDetails = {
        user_id: db_result[0].user_id,
        user_full_name: db_result[0].user_full_name,
        user_phone: db_result[0].user_phone,
        user_email: db_result[0].user_email,
        user_name: db_result[0].user_name,
      };

      let token = generateToken(userDetails);

      res.status(200).json({
        status: 200,
        message: "Login successful",
        accessToken: token,
	loggedIn: 'success'
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to login, Please try again",
    });
  }
});

module.exports = router;
