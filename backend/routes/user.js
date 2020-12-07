const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRound = 11;
const userModel = require("../models/user");
const { validateToken } = require("../utilis/validateToken.js");
const generateToken = require("../utilis/generateToken");

router.get("/get-users", validateToken, async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length === 0) {
      res.status(200).json({
        message: "The user collection is empty"
      });
    } else {
      res.status(200).json({
        data: users,
        message: "Get users successfully"
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error
    });
  }
});

router.post("/add-user", async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, saltRound);
    await userModel.find({ email: req.body.email })
      .exec()
      .then(async (response) => {
        if (response.length === 0) {
          await userModel.create({
           ...req.body, password: hashPassword 
          }).then(user => {
            const token = generateToken(user);
            res.status(201).json({
              message: "User created successfully!",
              token
            });
          }).catch(err => {
            res.json({
              message: err
            });
          });
        } else {
           return res.status(409).json({
            message: "Email already Exist!",
          });
        }
      });
  } catch (error) {
    res.status(400).json({
      message: error
    });
  }
});

router.post("/auth", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: "Auth successfully",
          token: token,
        });
      } else {
        res.status(401).send("Invalid Password");
      }
    } else {
      res.status(401).send("Invalid Email and Password");
    }
  } catch (err) {
    next(err);
    res.status(400).send("Invalid Credential");
  }
});

router.post('/current_user', validateToken, async (req, res) => {
  try {
    const { id: _id } = req.user;
    userModel.findOne({ _id }, (err, result) => {
      if (result) {
      res.status(200).json({
        message: "sign in succesfully",
        data: result,
      });
    } else {
      res.status(500).json({
        message: err
      })
    }
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    })
  }
});

router.delete('/delete/:id', validateToken, async (req, res) => {
  try {
    const id = req.params;
    userModel.findByIdAndDelete({ _id: id }, (err, result) => {
      if (err) {
        res.status(403).json({
          message: err
        });
      } else {
        res.status(200).json({
          message: "Account deleted successfully",
          data: result
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      message: err
    })
  }
});

router.patch('update/:id', validateToken, async (req, res) => {
  try {
    const _id = req.params;
    userModel.findByIdAndUpdate({ _id }, (err, result) => {
       if (err) {
        res.status(403).json({
          message: err
        });
      } else {
        res.status(200).json({
          message: "Account updated successfully",
          data: result
        });
      }
    })
  } catch (err) {
    res.status(400).json({
      message: err
    })
  }
});

module.exports = router;
