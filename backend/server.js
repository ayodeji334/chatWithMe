const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(bodyParser.json());

//Connection to Db with mongoose
mongoose
  .connect("mongodb://localhost:27017/chatWithMe", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Db connected");
    //Create Port
    const port = 8000;
    app.listen(port, () => {
      console.log(`Connected to port ${port}`);
    });
  }).catch((err) => {
    console.log(err);
  });

//Routes
const userRouteController = require("./routes/routes");

//Endpoint
app.use("/api/user", userRouteController);

//Check for error
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle errors
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.status === 404) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.status(500).json({ message: "Something looks wrong :( !!!" });
  }
});