const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
let User = require("../models/user.js");
const jwt = require("jsonwebtoken");
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
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email }); // find user with email
    
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        //Generate token
        const token = jwt.sign({ id: user._id }, "secret" , {
          expiresIn: "1h", // token expires in 1hour
        });
        //send res to client side
        res.status(200).json({
          message: "Auth successfully",
          firstname: user.firstname,
          lastname: user.lastname,
          token: token,
        });
      } else {
        console.log("user not match!");
        res.send("Invalid Password");
      }
    } else {
      res.status(401).send("Invalid Email and Password");
    }
  } catch (err) {
    next(err);
    res.status(400).send("Invalid Credential");
  }
});

module.exports = router;
