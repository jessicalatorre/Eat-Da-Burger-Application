// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');
// var orm = require(ormMongo);

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    //orm for sql queries. This adds one more abstract layer to server, so it doesn't know the particulars of the mysql query. Can ensure this file isn't public and other sql data file is not public. Also if you decide to go from mySql to MongoDB..? This is where ORM comes in. We should only need to edit that file.
    //everytime we want to update the database we just updated the ORM file. kind of like an API but with segmented files.
    //So we'll need to require the ORM here and keep our functions abstract.
    //selectAll and insertOne, etc are mysql methods
    orm.selectAll('burgers', function(res, example) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
