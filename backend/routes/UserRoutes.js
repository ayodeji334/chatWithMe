const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
let User = require("../models/user.js");
const { generateToken } = require("../utilis/generateToken.js");
const saltRound = 11;

// Get all users
router.get("/get-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      data: users,
      message: " Get users sucessfully"
    });
  } catch (error) {
    res.status(400).json({
      message: error
    });
  }
});

// Create one user
router.post("/add-user", async (req, res) => {
  try {
    // const user = new User(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, saltRound);
  
    await User.find({ email: req.body.email })
      .exec()
      .then(async (response) => {
        if (response.length >= 1) {
          return res.status(409).json({
            message: "Email already Exist!",
          });
        } else {
          const new_user = await User.create({
            password: hashPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
          });

          //Send the new user detail
          res.status(200).json({
            message: "User created successfully!",
            data: new_user,
          });
        }
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // check the passwordconsole.log(user);
      if (bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(200).json({
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          token: generateToken(user)
        })
      } else {
        res.status(401).json({
          message: "Invalid Password"
        });
      }
    }
    // if the above conditions are not false
    res.status(401).json({
      message: "There is no user with the record",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
