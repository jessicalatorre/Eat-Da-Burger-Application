//step 4 - set up routes

// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  //this is the data we're passing from burger.js, which was from the orm.js (which is full of mysql query syntax)

  //burger is the controller and it gets the data from the ORM
  burger.selectAll(function(data) {
    //this is our handlebars object with burger data. we can pass the burger data (which has been abstracted three times so far), to the index.handlebars file. res.render('index, hbsObject) allows us to do render the latter into the browswer.
    var hbsObject = {
      burgers: data,
      // burgers2: [1,2,3]
    };
    //console.log(hbsObject);
    //pass the custom hbs Object (with all the data) into html
    res.render('index', hbsObject);
  });
});

//when user adds new burger, we use the post method to insert this into the database. the ORM.js file does the query to mysql, then when the results are entually passed through, they'll be rendered in the html. The redirect refreshes the page, so the new burger shows up.
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

//this is the update for when the burger is devoured. If a burger is devoured, we need to set it equal to true, so we can update the database. Then the page will render again with the redirect and the updated results (after all the results are abstracted from the orm, to burger.js to burgers_controller.js);
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log(req)
  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
