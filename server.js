const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const router = require("./routes/index")
const userController = require("./controllers/userController");
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
const bodyParser = require("body-parser")

// load secrets to environment variables
require('dotenv').config();

var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.json());

router.use('/login', cors(corsOptions), userController.login);

app.use('/', router);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

