const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
//packages we need to setup json tokens
const morgan = require("morgan");
const jwt = require("jsonwebtoken"); //used to create/verify token
const config = require("./config");
const User = require("./models/user");

const port = process.env.PORT || 3001;
mongoose.connect(config.database); //connects to our database
app.set('superSecret', config.secret); // our secret variable


// Configure body parser for AJAX requests to get info from POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use morgan to log requests to the console.
app.use(morgan('dev'));


app.get('/user', function(req, res) {
  // res.send('Hello! The Api is at http://localhost:' + port + '/user');
  var nick = new User({
    name:  'Nick Johns',
    password: 'password',
    admin: true
  });

nick.save(function(err){
  if (err) throw err;

  console.log('User saved successfully');
  res.json({success: true});
});
});

// Serve up static assets
//app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

var apiRoutes = express.Router();
// TODO route to authenticate a user
apiRoutes.post('/authenticate', function(req, res){
  User.findOne({
    name: req.body.name
  }, function(err, user){
    if (err) throw err;
    if (!user) {
      res.json({success: false, message: 'Authentication failed, user not found'});
    } else if (user){
      //check tosee if pw matches
      if(user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed, Wrong Password'});
      }else {
        // if user is found and pw is correct 
        const payload = {
          admin: user.admin
        };
        var token = jwt.sign(payload, app.get('superSecret'), {
          expiresInMinutes: 1440  //24 hours
        }
      );
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });

      }
    }
  })
}) 
// TODO route middleware to verify a token

//Route to show a message
apiRoutes.get('/', function(req, res){
  res.json({message:  'Welcome to our Rental API'});
});

// Route to return all users
apiRoutes.get('/users', function(req,res){
  User.find({}, function(err, users) {
    res.json(users);
  });
});
// apply the routes to the app with prefix /api
app.use('/api', apiRoutes);

// Connect to the Mongo DB  use this for Heroku deploy - commented out  for testing
//  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
//app.listen(PORT, function() {
  //console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//});
