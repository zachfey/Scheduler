const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require("./routes");
const session = require('express-session')
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session)
const path = require('path');
// const dbConnection = require('./models')
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: 'a-tan-spoon', //randomly selected string to secure hash
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false
  })
)
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build"));
  // app.get('/*', function (req, res) {
  //   console.log('serving up index.html')
  //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  // })
  app.use(express.static(path.resolve(__dirname, 'client/build')))
}

// Initialize passport session
app.use(passport.initialize())
app.use(passport.session()) //calls serializeUser and deserializeUser

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/scheduler",
  {useNewUrlParser: true}
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
